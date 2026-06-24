/* ===========================================================================
 * hierarchyTransforms.ts
 * Pure functions: flat AgentHierarchyRecord[]  ->  view models + graphs.
 * No React, no React Flow here — keep transforms testable and reusable.
 * ===========================================================================
 */
import type {
  AgentHierarchyRecord,
  AgentStatus,
  FilterState,
  LineageGraph,
  LineageNodeData,
  Person,
  TopologyMode,
} from "../types/hierarchy";

export const ROOT_ID = "AmeriLife";

export const LEVEL_ORDER = [
  "IMO / Top Agency",
  "Agency Principal",
  "Regional Manager",
  "District Manager",
  "Agent",
  "Writing Agent",
] as const;

export const NODE_SIZE = {
  root: { width: 212, height: 80 },
  affiliate: { width: 196, height: 72 },
  carrier: { width: 196, height: 72 },
  agent: { width: 236, height: 122 },
};

/* --------------------------------------------------------------------------
 * 1. Collapse carrier rows into distinct people, keyed by NPN.
 * ------------------------------------------------------------------------ */
export function buildPersons(records: AgentHierarchyRecord[]): Map<string, Person> {
  const map = new Map<string, Person>();
  for (const r of records) {
    let p = map.get(r.agentNpn);
    if (!p) {
      p = {
        npn: r.agentNpn,
        name: r.agentName,
        affiliateId: r.affiliateId,
        affiliateName: r.affiliateName,
        levelName: r.levelName,
        levelId: r.levelId,
        parentNpn: r.parentAgentNpn,
        state: r.state,
        status: r.status,
        effectiveDate: r.effectiveDate,
        terminationDate: r.terminationDate,
        agentIds: [],
        carriers: [],
        lobs: [],
        productionYtd: 0,
        policiesYtd: 0,
        health: r.lineageHealth,
        rows: [],
      };
      map.set(r.agentNpn, p);
    }
    p.rows.push(r);
    p.productionYtd += r.productionYtd;
    p.policiesYtd += r.policiesYtd;
    if (r.effectiveDate < p.effectiveDate) p.effectiveDate = r.effectiveDate;
    if (r.terminationDate && (!p.terminationDate || r.terminationDate > p.terminationDate)) {
      p.terminationDate = r.terminationDate;
    }
  }
  for (const p of map.values()) {
    const carriers = new Set<string>();
    const ids = new Set<string>();
    const lobs = new Set<string>();
    const statuses = new Set<AgentStatus>();
    for (const r of p.rows) {
      carriers.add(r.carrier);
      ids.add(r.agentId);
      lobs.add(r.lineOfBusiness);
      statuses.add(r.status);
    }
    p.carriers = [...carriers].sort();
    p.agentIds = [...ids].sort();
    p.lobs = [...lobs].sort();
    // person-level status precedence: Active > Pending > Terminated
    p.status = statuses.has("Active") ? "Active" : statuses.has("Pending") ? "Pending" : "Terminated";
  }
  return map;
}

/* --------------------------------------------------------------------------
 * Internal helper to assemble a LineageGraph.
 * ------------------------------------------------------------------------ */
function emptyGraph(): LineageGraph {
  return {
    nodes: new Map(),
    childrenOf: new Map(),
    parentOf: new Map(),
    rootId: ROOT_ID,
  };
}
function addNode(g: LineageGraph, id: string, data: LineageNodeData, kind: keyof typeof NODE_SIZE) {
  g.nodes.set(id, { id, ...data, ...NODE_SIZE[kind] });
}
function link(g: LineageGraph, parent: string, child: string) {
  if (!g.childrenOf.has(parent)) g.childrenOf.set(parent, []);
  g.childrenOf.get(parent)!.push(child);
  g.parentOf.set(child, parent);
}

/* --------------------------------------------------------------------------
 * 2a. Affiliate-first topology:  AmeriLife > Affiliate > Agent (org tree)
 * ------------------------------------------------------------------------ */
export function buildAffiliateGraph(persons: Map<string, Person>): LineageGraph {
  const g = emptyGraph();
  addNode(g, ROOT_ID, { kind: "root", label: "AmeriLife" }, "root");

  const byAff = new Map<string, Person[]>();
  for (const p of persons.values()) {
    if (!byAff.has(p.affiliateId)) byAff.set(p.affiliateId, []);
    byAff.get(p.affiliateId)!.push(p);
  }
  for (const [affId, people] of byAff) {
    const id = `aff::${affId}`;
    addNode(g, id, { kind: "affiliate", label: people[0].affiliateName, affiliateId: affId }, "affiliate");
    link(g, ROOT_ID, id);
  }
  for (const p of persons.values()) {
    addNode(g, `agt::${p.npn}`, { kind: "agent", label: p.name, person: p }, "agent");
  }
  for (const p of persons.values()) {
    const parent = p.parentNpn && persons.has(p.parentNpn) ? `agt::${p.parentNpn}` : `aff::${p.affiliateId}`;
    link(g, parent, `agt::${p.npn}`);
  }
  return g;
}

/* --------------------------------------------------------------------------
 * 2b. Carrier-first topology:  AmeriLife > Carrier > Affiliate > Agent
 *     (a re-organization of the visualization; affiliate stays the true org)
 * ------------------------------------------------------------------------ */
export function buildCarrierGraph(
  persons: Map<string, Person>,
  records: AgentHierarchyRecord[]
): LineageGraph {
  const g = emptyGraph();
  addNode(g, ROOT_ID, { kind: "root", label: "AmeriLife" }, "root");

  // carrier -> affiliateId -> rows
  const byCarrier = new Map<string, Map<string, AgentHierarchyRecord[]>>();
  for (const r of records) {
    if (!byCarrier.has(r.carrier)) byCarrier.set(r.carrier, new Map());
    const affs = byCarrier.get(r.carrier)!;
    if (!affs.has(r.affiliateId)) affs.set(r.affiliateId, []);
    affs.get(r.affiliateId)!.push(r);
  }

  for (const [carrier, affs] of byCarrier) {
    const carId = `car::${carrier}`;
    addNode(g, carId, { kind: "carrier", label: carrier, carrier }, "carrier");
    link(g, ROOT_ID, carId);

    for (const [affId, rows] of affs) {
      const affNodeId = `car::${carrier}::aff::${affId}`;
      addNode(
        g,
        affNodeId,
        { kind: "affiliate", label: rows[0].affiliateName, affiliateId: affId, carrierContext: carrier },
        "affiliate"
      );
      link(g, carId, affNodeId);

      const npnSet = new Set(rows.map((r) => r.agentNpn));
      for (const npn of npnSet) {
        const person = persons.get(npn)!;
        const sliceRows = rows.filter((r) => r.agentNpn === npn);
        addNode(
          g,
          `car::${carrier}::agt::${npn}`,
          {
            kind: "agent",
            label: person.name,
            person,
            carrierContext: carrier,
            slicedProduction: sliceRows.reduce((s, r) => s + r.productionYtd, 0),
            slicedPolicies: sliceRows.reduce((s, r) => s + r.policiesYtd, 0),
            slicedAgentId: sliceRows[0].agentId,
            slicedStatus: sliceRows[0].status,
          },
          "agent"
        );
      }
      for (const npn of npnSet) {
        const person = persons.get(npn)!;
        const parent =
          person.parentNpn && npnSet.has(person.parentNpn)
            ? `car::${carrier}::agt::${person.parentNpn}`
            : affNodeId;
        link(g, parent, `car::${carrier}::agt::${npn}`);
      }
    }
  }
  return g;
}

export function buildGraph(
  mode: TopologyMode,
  persons: Map<string, Person>,
  records: AgentHierarchyRecord[]
): LineageGraph {
  return mode === "affiliate" ? buildAffiliateGraph(persons) : buildCarrierGraph(persons, records);
}

/* --------------------------------------------------------------------------
 * 3. Filtering — match agents, then keep their ancestors so lineage stays
 *    connected. Returns null when nothing is filtered (everything visible).
 * ------------------------------------------------------------------------ */
export function agentMatchesFilters(
  node: LineageNodeData,
  filters: FilterState,
  mode: TopologyMode
): boolean {
  const p = node.person;
  if (!p) return false;
  if (filters.affiliates.size && !filters.affiliates.has(p.affiliateName)) return false;
  if (filters.states.size && !filters.states.has(p.state)) return false;
  if (filters.statuses.size && !filters.statuses.has(p.status)) return false;
  if (filters.levels.size && !filters.levels.has(p.levelName)) return false;
  if (filters.lobs.size && !p.lobs.some((l) => filters.lobs.has(l))) return false;
  if (filters.carriers.size) {
    if (mode === "carrier") {
      if (!node.carrierContext || !filters.carriers.has(node.carrierContext)) return false;
    } else if (!p.carriers.some((c) => filters.carriers.has(c))) return false;
  }
  return true;
}

export function hasActiveFilters(f: FilterState): boolean {
  return (
    f.carriers.size + f.affiliates.size + f.states.size + f.statuses.size + f.lobs.size + f.levels.size >
    0
  );
}

export function computeVisibleSet(
  graph: LineageGraph,
  filters: FilterState,
  mode: TopologyMode
): Set<string> | null {
  if (!hasActiveFilters(filters)) return null;
  const vis = new Set<string>([graph.rootId]);
  for (const node of graph.nodes.values()) {
    if (node.kind === "agent" && agentMatchesFilters(node, filters, mode)) {
      let cur: string | undefined = node.id;
      while (cur && !vis.has(cur)) {
        vis.add(cur);
        cur = graph.parentOf.get(cur);
      }
    }
  }
  return vis;
}

/* --------------------------------------------------------------------------
 * 4. Visible children (filter- and collapse-aware), sorted for tidy layout.
 * ------------------------------------------------------------------------ */
export function makeVisibleChildren(
  graph: LineageGraph,
  visibleSet: Set<string> | null,
  collapsed: Set<string>
) {
  const isVisible = (id: string) => (visibleSet ? visibleSet.has(id) : true);
  return (id: string): string[] => {
    if (collapsed.has(id)) return [];
    const kids = (graph.childrenOf.get(id) || []).filter(isVisible);
    kids.sort((a, b) => {
      const na = graph.nodes.get(a)!;
      const nb = graph.nodes.get(b)!;
      const la = na.person?.levelId ?? 0;
      const lb = nb.person?.levelId ?? 0;
      if (la !== lb) return la - lb;
      const pa = na.person?.productionYtd ?? 0;
      const pb = nb.person?.productionYtd ?? 0;
      if (pa !== pb) return pb - pa;
      return na.label.localeCompare(nb.label);
    });
    return kids;
  };
}

/* --------------------------------------------------------------------------
 * 5. Selection lineage — upline path to root + full downline subtree.
 * ------------------------------------------------------------------------ */
export interface LineageSelection {
  up: Set<string>;
  upEdges: Set<string>;
  down: Set<string>;
  downEdges: Set<string>;
}
export function computeLineage(
  graph: LineageGraph,
  selectedId: string | null,
  visibleChildren: (id: string) => string[]
): LineageSelection {
  const up = new Set<string>();
  const upEdges = new Set<string>();
  const down = new Set<string>();
  const downEdges = new Set<string>();
  if (!selectedId || !graph.nodes.has(selectedId)) return { up, upEdges, down, downEdges };

  let cur: string | undefined = selectedId;
  while (cur) {
    up.add(cur);
    const par = graph.parentOf.get(cur);
    if (par) upEdges.add(`${par}->${cur}`);
    cur = par;
  }
  down.add(selectedId);
  const stack = [selectedId];
  while (stack.length) {
    const id = stack.pop()!;
    for (const k of visibleChildren(id)) {
      downEdges.add(`${id}->${k}`);
      down.add(k);
      stack.push(k);
    }
  }
  return { up, upEdges, down, downEdges };
}

export function computeBreadcrumb(graph: LineageGraph, selectedId: string | null) {
  if (!selectedId || !graph.nodes.has(selectedId)) return [];
  const chain: { id: string; label: string; kind: string; person?: Person }[] = [];
  let cur: string | undefined = selectedId;
  while (cur) {
    const n = graph.nodes.get(cur)!;
    chain.unshift({ id: n.id, label: n.label, kind: n.kind, person: n.person });
    cur = graph.parentOf.get(cur);
  }
  return chain;
}

/* --------------------------------------------------------------------------
 * 6. Filter option lists + search.
 * ------------------------------------------------------------------------ */
export function buildFilterOptions(persons: Map<string, Person>) {
  const carriers = new Set<string>();
  const affiliates = new Set<string>();
  const states = new Set<string>();
  const lobs = new Set<string>();
  const levels = new Set<string>();
  for (const p of persons.values()) {
    p.carriers.forEach((c) => carriers.add(c));
    affiliates.add(p.affiliateName);
    states.add(p.state);
    p.lobs.forEach((l) => lobs.add(l));
    levels.add(p.levelName);
  }
  return {
    carriers: [...carriers].sort(),
    affiliates: [...affiliates].sort(),
    states: [...states].sort(),
    statuses: ["Active", "Pending", "Terminated"],
    lobs: [...lobs].sort(),
    levels: LEVEL_ORDER.filter((l) => levels.has(l)),
  };
}

export function searchNodeId(
  graph: LineageGraph,
  visibleIds: Set<string>,
  query: string
): string | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  for (const id of visibleIds) {
    const n = graph.nodes.get(id);
    if (!n || n.kind !== "agent" || !n.person) continue;
    const p = n.person;
    const hay = [p.name, p.npn, ...p.agentIds, p.affiliateName, ...p.carriers].join(" ").toLowerCase();
    if (hay.includes(q)) return id;
  }
  for (const id of visibleIds) {
    const n = graph.nodes.get(id);
    if (n && n.label.toLowerCase().includes(q)) return id;
  }
  return null;
}

export const fmtUSD = (n: number) =>
  n >= 1000 ? "$" + (n / 1000).toFixed(n >= 100000 ? 0 : 1) + "k" : "$" + n;
export const fmtFull = (n: number) => "$" + n.toLocaleString("en-US");
