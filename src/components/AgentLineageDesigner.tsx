import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GitBranch, ArrowLeftRight, ArrowUpDown, Maximize2 } from "lucide-react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  useReactFlow,
  type Node,
  type Edge,
  type NodeMouseHandler,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import type { AgentHierarchyRecord, FilterState, LineageNodeData, RenderMode, TopologyMode } from "../types/hierarchy";
import { agentHierarchyRecords } from "../data/agentHierarchyMockData";
import {
  buildPersons, buildGraph, buildFilterOptions, computeVisibleSet, makeVisibleChildren,
  computeLineage, hasActiveFilters, searchNodeId,
} from "../utils/hierarchyTransforms";
import { computeFlow, type LayoutDir } from "../utils/layout";

import TopToolbar from "./TopToolbar";
import LeftSidebar from "./LeftSidebar";
import PropertiesPanel from "./PropertiesPanel";
import LineageBreadcrumb from "./LineageBreadcrumb";
import LegendPanel from "./LegendPanel";
import RootNode from "./nodes/RootNode";
import AffiliateNode from "./nodes/AffiliateNode";
import CarrierNode from "./nodes/CarrierNode";
import AgentNode from "./nodes/AgentNode";

const RECORDS: AgentHierarchyRecord[] = agentHierarchyRecords;

const nodeTypes = { root: RootNode, affiliate: AffiliateNode, carrier: CarrierNode, agent: AgentNode };

function emptyFilters(): FilterState {
  return { carriers: new Set(), affiliates: new Set(), states: new Set(), statuses: new Set(), lobs: new Set(), levels: new Set() };
}

function Designer() {
  const rf = useReactFlow();

  const persons = useMemo(() => buildPersons(RECORDS), []);
  const options = useMemo(() => buildFilterOptions(persons), [persons]);

  const [topology, setTopology] = useState<TopologyMode>("affiliate");
  const [renderMode, setRenderMode] = useState<RenderMode>("hierarchy");
  const [glow, setGlow] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [filters, setFilters] = useState<FilterState>(emptyFilters);
  const [toast, setToast] = useState<string | null>(null);
  const [layoutDir, setLayoutDir] = useState<LayoutDir>("LR");

  const graph = useMemo(() => buildGraph(topology, persons, RECORDS), [topology, persons]);
  const visibleSet = useMemo(() => computeVisibleSet(graph, filters, topology), [graph, filters, topology]);
  const visibleChildren = useMemo(() => makeVisibleChildren(graph, visibleSet, collapsed), [graph, visibleSet, collapsed]);

  // visible ids (walk from root through visible children)
  const visibleIds = useMemo(() => {
    const ids = new Set<string>();
    const walk = (id: string) => {
      if (ids.has(id)) return;
      ids.add(id);
      visibleChildren(id).forEach(walk);
    };
    walk(graph.rootId);
    return ids;
  }, [graph, visibleChildren]);

  const prodMax = useMemo(() => {
    let m = 1;
    for (const id of visibleIds) {
      const n = graph.nodes.get(id);
      if (n?.person) m = Math.max(m, n.carrierContext ? n.slicedProduction ?? 0 : n.person.productionYtd);
    }
    return m;
  }, [visibleIds, graph]);

  const lineage = useMemo(() => computeLineage(graph, selected, visibleChildren), [graph, selected, visibleChildren]);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node<LineageNodeData>>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  // structural key — relayout only when structure changes (not on selection)
  const structureKey = useMemo(() => {
    const f = (Object.keys(filters) as (keyof FilterState)[]).map((k) => `${k}:${[...filters[k]].sort().join(",")}`).join("|");
    return `${topology}#${layoutDir}#${f}#${[...collapsed].sort().join(",")}`;
  }, [topology, layoutDir, filters, collapsed]);

  // 1) structural layout
  useEffect(() => {
    const isVisible = (id: string) => (visibleSet ? visibleSet.has(id) : true);
    const decorate = (id: string) => ({
      hasChildren: (graph.childrenOf.get(id) || []).some(isVisible),
      collapsed: collapsed.has(id),
    });
    const { nodes: n, edges: e } = computeFlow(graph, visibleChildren, decorate, layoutDir);
    setNodes(n);
    setEdges(e);
    const t = setTimeout(() => rf.fitView({ padding: 0.18, duration: 450 }), 40);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [structureKey]);

  // 2) decoration — selection flags + render mode, no relayout
  useEffect(() => {
    setNodes((nds) =>
      nds.map((n) => {
        const onPath = lineage.up.has(n.id);
        const inDownline = lineage.down.has(n.id) && !onPath;
        const dimmed = !!selected && !onPath && !lineage.down.has(n.id);
        return { ...n, selected: selected === n.id, data: { ...n.data, selected: selected === n.id, onPath, inDownline, dimmed, renderMode, prodMax, glow } };
      })
    );
    setEdges((eds) =>
      eds.map((e) => {
        const key = `${e.source}->${e.target}`;
        const up = lineage.upEdges.has(key);
        const down = lineage.downEdges.has(key) && !up;
        let className = "edge-base";
        let animated = false;
        if (selected) {
          if (up) { className = "edge-up"; animated = true; }
          else if (down) className = "edge-down";
          else className = "edge-dim";
        }
        return { ...e, className, animated, type: "default" };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, renderMode, glow, prodMax, structureKey]);

  // 3) zoom to chain when a node is selected
  useEffect(() => {
    if (!selected) return;
    const chainIds = [selected, ...lineage.up, ...lineage.down];
    const t = setTimeout(() => {
      rf.fitView({ nodes: chainIds.map((id) => ({ id })), padding: 0.3, duration: 500 });
    }, 60);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  /* ---------- counts ---------- */
  const counts = useMemo(() => {
    const affs = new Set<string>(), cars = new Set<string>();
    const people = new Set<string>();
    for (const id of visibleIds) {
      const n = graph.nodes.get(id);
      if (!n) continue;
      if (n.kind === "agent" && n.person) { people.add(n.person.npn); n.person.carriers.forEach((c) => cars.add(c)); }
      if (n.kind === "affiliate" && n.affiliateId) affs.add(n.affiliateId);
      if (n.kind === "carrier" && n.carrier) cars.add(n.carrier);
    }
    return { agents: people.size, affiliates: affs.size, carriers: cars.size };
  }, [visibleIds, graph]);

  /* ---------- handlers ---------- */
  const flash = (m: string) => { setToast(m); setTimeout(() => setToast(null), 1700); };

  const toggleCollapse = useCallback((id: string) => {
    setCollapsed((c) => { const n = new Set(c); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }, []);

  const onNodeClick: NodeMouseHandler = useCallback((e, node) => {
    const target = e.target as HTMLElement;
    const cb = target.closest("[data-collapse]");
    if (cb) { toggleCollapse((cb as HTMLElement).dataset.collapse!); return; }
    setSelected(node.id);
  }, [toggleCollapse]);

  const centerOn = useCallback((id: string) => {
    const n = rf.getNode(id);
    if (!n) return;
    const w = (n.width as number) || 200, h = (n.height as number) || 100;
    rf.setCenter(n.position.x + w / 2, n.position.y + h / 2, { zoom: Math.max(rf.getZoom(), 0.9), duration: 500 });
  }, [rf]);

  const onSearch = useCallback(() => {
    const hit = searchNodeId(graph, visibleIds, query);
    if (hit) { setSelected(hit); setTimeout(() => centerOn(hit), 30); flash("Centered on match"); }
    else flash("No agent matched");
  }, [graph, visibleIds, query, centerOn]);

  const setView = useCallback((t: TopologyMode, r: RenderMode) => { setTopology(t); setRenderMode(r); setSelected(null); }, []);

  const onExpandAll = useCallback(() => { setCollapsed(new Set()); setRenderMode("hierarchy"); setTimeout(() => rf.fitView({ padding: 0.18, duration: 450 }), 60); }, [rf]);

  const onReset = useCallback(() => { setCollapsed(new Set()); setSelected(null); setTimeout(() => rf.fitView({ padding: 0.18, duration: 450 }), 60); flash("View reset"); }, [rf]);

  const toggleFilter = useCallback((group: keyof FilterState, value: string) => {
    setFilters((f) => { const n = new Set(f[group]); n.has(value) ? n.delete(value) : n.add(value); return { ...f, [group]: n }; });
    setSelected(null);
  }, []);
  const clearFilters = useCallback(() => setFilters(emptyFilters()), []);
  const activeFilterCount =
    filters.carriers.size + filters.affiliates.size + filters.states.size + filters.statuses.size + filters.lobs.size + filters.levels.size;

  const onExport = useCallback(() => {
    const payload = {
      exportedAt: new Date().toISOString(),
      topology, renderMode,
      activeFilters: Object.fromEntries((Object.keys(filters) as (keyof FilterState)[]).map((k) => [k, [...filters[k]]])),
      selected: selected ? graph.nodes.get(selected)?.label : null,
      visibleNodes: [...visibleIds].map((id) => {
        const n = graph.nodes.get(id)!;
        return { id, kind: n.kind, label: n.label, npn: n.person?.npn, level: n.person?.levelName,
          production: n.carrierContext ? n.slicedProduction : n.person?.productionYtd };
      }),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `lineage-${topology}-view.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    flash("View exported");
  }, [topology, renderMode, filters, selected, graph, visibleIds]);

  const minimapColor = (n: Node) => {
    const k = (n.data as LineageNodeData)?.kind;
    return k === "root" ? "#7FE9FF" : k === "affiliate" ? "#4F8BFF" : k === "carrier" ? "#E84FD6" : "#2DE2C8";
  };

  const empty = hasActiveFilters(filters) && visibleIds.size <= 1;

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-abyss font-display text-slate-100 [background:radial-gradient(1200px_700px_at_75%_-10%,rgba(40,80,150,.18),transparent_60%),radial-gradient(900px_600px_at_10%_110%,rgba(180,40,160,.12),transparent_60%),#070A14]">
      <TopToolbar {...{ topology, setTopology: (t) => setView(t, renderMode), glow, setGlow, query, setQuery, onSearch, onReset, onFit: () => rf.fitView({ padding: 0.18, duration: 450 }), onExport }} />

      <div className="flex min-h-0 flex-1">
        <LeftSidebar {...{ topology, renderMode, setView, counts, options, filters, toggleFilter, clearFilters, activeFilterCount }} />

        <main className="relative min-w-0 flex-1">
          <div className="absolute left-3 top-3 z-10 overflow-hidden rounded-[12px] border border-line bg-[#0d1220]/85 shadow-[0_4px_24px_rgba(0,0,0,.4)] backdrop-blur-xl">
            <button
              onClick={onExpandAll}
              className="flex w-full items-center gap-2.5 px-3 py-2.5 text-left transition-colors hover:bg-white/[.04]"
            >
              <span className="grid h-[28px] w-[28px] flex-none place-items-center rounded-lg bg-white/5 text-[#2DE2C8]">
                <Maximize2 size={15} />
              </span>
              <span className="flex flex-col leading-tight">
                <b className="text-[12px] font-semibold text-slate-100">View Full Lineage</b>
                <i className="not-italic text-[10px] text-slate-500">Expand entire network</i>
              </span>
            </button>
            <div className="border-t border-line">
              <button
                onClick={() => setLayoutDir(layoutDir === "LR" ? "TB" : "LR")}
                className="flex w-full items-center gap-2 px-3 py-2 text-left transition-colors hover:bg-white/[.04]"
              >
                {layoutDir === "LR"
                  ? <ArrowUpDown size={12} className="flex-none text-[#2DE2C8]" />
                  : <ArrowLeftRight size={12} className="flex-none text-[#2DE2C8]" />}
                <span className="text-[12px] font-semibold text-slate-100">Flip Orientation</span>
              </button>
            </div>
          </div>

          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            onPaneClick={() => setSelected(null)}
            fitView
            minZoom={0.12}
            maxZoom={2.4}
            proOptions={{ hideAttribution: true }}
            defaultEdgeOptions={{ type: "default" }}
          >
            <Background variant={BackgroundVariant.Dots} gap={26} size={1.4} color="rgba(110,140,200,.22)" />
            <Controls className="!rounded-xl !border !border-line !bg-glass !backdrop-blur-xl [&_button]:!border-line [&_button]:!bg-white/5 [&_button]:!text-slate-300" />
            <MiniMap pannable zoomable nodeColor={minimapColor} maskColor="rgba(6,9,18,.7)" className="!rounded-xl !border !border-line !bg-[#0a0e1a]" />
          </ReactFlow>

          <LegendPanel />

          {empty && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-slate-400">
              <p>No agents match these filters.</p>
              <button onClick={clearFilters} className="rounded-lg border border-[#2DE2C8]/40 bg-[#2DE2C8]/10 px-3.5 py-1.5 text-[#2DE2C8]">Clear filters</button>
            </div>
          )}

          {toast && (
            <div className="absolute left-1/2 top-4 z-[60] -translate-x-1/2 rounded-[10px] border border-[#2DE2C8]/35 bg-[#0d1220]/90 px-4 py-2 text-[12px] text-[#2DE2C8] shadow-[0_0_22px_rgba(45,226,200,.2)] backdrop-blur-md">
              {toast}
            </div>
          )}
        </main>

        {selected && <PropertiesPanel selectedId={selected} graph={graph} persons={persons} records={RECORDS} onPick={(id) => { setSelected(id); setTimeout(() => centerOn(id), 30); }} />}
      </div>

      <LineageBreadcrumb graph={graph} selectedId={selected} onPick={(id) => { setSelected(id); setTimeout(() => centerOn(id), 30); }} />
    </div>
  );
}

export default function AgentLineageDesigner() {
  return (
    <ReactFlowProvider>
      <Designer />
    </ReactFlowProvider>
  );
}
