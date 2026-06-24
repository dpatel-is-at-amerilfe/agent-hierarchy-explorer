/* ===========================================================================
 * layout.ts
 * Layered left->right tree layout for React Flow.
 * Uses a tidy-tree algorithm (no external dep required) but also exposes a
 * dagre-based alternative — toggle via LAYOUT_ENGINE.
 * ===========================================================================
 */
import dagre from "@dagrejs/dagre";
import type { Edge, Node } from "@xyflow/react";
import type { LineageGraph, LineageNodeData } from "../types/hierarchy";

export type LayoutDir = "LR" | "TB";
export type PositionedNode = Node<LineageNodeData>;

/** Tidy-tree layout: depth -> main axis, siblings stacked on cross axis. */
function tidyTree(
  graph: LineageGraph,
  visibleChildren: (id: string) => string[],
  dir: LayoutDir
): Map<string, { x: number; y: number }> {
  const levelGap = dir === "LR" ? 326 : 220;
  const sibGap   = dir === "LR" ? 152 : 300;
  const pos = new Map<string, { x: number; y: number }>();
  let cursor = 0;
  const seen = new Set<string>();
  const place = (id: string, depth: number): number => {
    if (seen.has(id)) return cursor;
    seen.add(id);
    const kids = visibleChildren(id);
    let cross: number;
    if (kids.length === 0) {
      cross = cursor;
      cursor += sibGap;
    } else {
      const crosses = kids.map((k) => place(k, depth + 1));
      cross = (crosses[0] + crosses[crosses.length - 1]) / 2;
    }
    pos.set(id, dir === "LR" ? { x: depth * levelGap, y: cross } : { x: cross, y: depth * levelGap });
    return cross;
  };
  place(graph.rootId, 0);
  return pos;
}

/** Dagre layered layout (alternative engine). */
function dagreLayout(
  graph: LineageGraph,
  visibleIds: Set<string>,
  visibleChildren: (id: string) => string[],
  dir: LayoutDir
): Map<string, { x: number; y: number }> {
  const gg = new dagre.graphlib.Graph();
  const ranksep = dir === "LR" ? 130 : 100;
  gg.setGraph({ rankdir: dir, ranksep, nodesep: 26, edgesep: 18 });
  gg.setDefaultEdgeLabel(() => ({}));
  for (const id of visibleIds) {
    const n = graph.nodes.get(id)!;
    gg.setNode(id, { width: n.width, height: n.height });
  }
  for (const id of visibleIds) {
    for (const k of visibleChildren(id)) {
      if (visibleIds.has(k)) gg.setEdge(id, k);
    }
  }
  dagre.layout(gg);
  const pos = new Map<string, { x: number; y: number }>();
  for (const id of visibleIds) {
    const n = gg.node(id);
    pos.set(id, { x: n.x, y: n.y });
  }
  return pos;
}

export const LAYOUT_ENGINE: "tidy" | "dagre" = "tidy";

/**
 * Produce positioned React Flow nodes + edges for the currently visible graph.
 * Positions are node centers; React Flow expects top-left, so we offset.
 */
export function computeFlow(
  graph: LineageGraph,
  visibleChildren: (id: string) => string[],
  decorate: (id: string) => Partial<LineageNodeData>,
  dir: LayoutDir = "LR"
): { nodes: PositionedNode[]; edges: Edge[] } {
  // collect visible ids by walking the tree from root
  const visibleIds = new Set<string>();
  const walk = (id: string) => {
    if (visibleIds.has(id)) return;
    visibleIds.add(id);
    visibleChildren(id).forEach(walk);
  };
  walk(graph.rootId);

  const centers =
    LAYOUT_ENGINE === "dagre"
      ? dagreLayout(graph, visibleIds, visibleChildren, dir)
      : tidyTree(graph, visibleChildren, dir);

  const nodes: PositionedNode[] = [];
  for (const id of visibleIds) {
    const n = graph.nodes.get(id)!;
    const c = centers.get(id);
    if (!c) continue;
    nodes.push({
      id,
      type: n.kind,
      position: { x: c.x - n.width / 2, y: c.y - n.height / 2 },
      data: { ...n, ...decorate(id) },
      width: n.width,
      height: n.height,
      draggable: true,
      selectable: true,
    });
  }

  const edges: Edge[] = [];
  for (const id of visibleIds) {
    for (const k of visibleChildren(id)) {
      if (!visibleIds.has(k)) continue;
      edges.push({ id: `${id}->${k}`, source: id, target: k, type: "smoothstep" });
    }
  }
  return { nodes, edges };
}
