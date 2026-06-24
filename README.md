# Interactive Agent Lineage Explorer

Deployed on Databricks here:
https://agent-network-lineage-explorer-1054782505781628.8.azure.databricksapps.com

---

A dark, command-center–style React prototype that visualizes AmeriLife agent
hierarchy lineage as an interactive network topology. Leadership can explore the
network organized **by Affiliate** or **by Carrier**, with **AmeriLife always at
the root**, and trace any agent's upline-to-root + downline as a lit circuit path.

Built with **React + TypeScript + Tailwind CSS + React Flow** (`@xyflow/react`).
Layered layout via `@dagrejs/dagre` (a tidy-tree engine is included as the default).

---

## Run locally

Requires Node 18+.

```bash
npm install
npm run dev        # start Vite dev server (http://localhost:5173)
npm run build      # type-check + production build
npm run preview    # preview the production build
```

That's it — no backend, no env vars. The app boots straight into the affiliate
view with the bundled mock data.

---

## Folder structure

```
src/
  App.tsx                      # mounts the designer
  main.tsx                     # React entry
  index.css                    # Tailwind + fonts + React Flow edge styling
  data/
    agentHierarchyMockData.ts  # 200 mock records (the API contract shape)
  types/
    hierarchy.ts               # all domain + view-model types
  utils/
    hierarchyTransforms.ts     # flat records -> persons, graphs, filters, lineage
    layout.ts                  # tidy-tree / dagre -> React Flow nodes + edges
    theme.ts                   # palette + per-level colors (single source of truth)
  components/
    AgentLineageDesigner.tsx   # orchestrator: state, React Flow wiring, handlers
    TopToolbar.tsx             # title, view-mode toggle, search, view actions
    LeftSidebar.tsx            # views, counts, filters
    PropertiesPanel.tsx        # context-aware details (root/affiliate/carrier/agent)
    LineageBreadcrumb.tsx      # AmeriLife > … > selected agent
    LegendPanel.tsx            # node + edge color legend
    nodes/
      RootNode.tsx             # AmeriLife
      AffiliateNode.tsx
      CarrierNode.tsx
      AgentNode.tsx            # telemetry-style card with data rows + risk dot
```

---

## How the business rules map to the code

All rules live in `utils/hierarchyTransforms.ts`, kept fully separate from rendering.

- **AmeriLife is always root.** Both graph builders seed a single `root` node.
- **A person = one NPN.** `buildPersons()` collapses the 200 carrier rows into
  150 people, aggregating carriers, agent IDs, LOBs, and production. The same
  person under multiple carriers stays one identity (NPN), even when `agentId`
  differs per carrier row.
- **Affiliate is the true org grouping.** `buildAffiliateGraph()` produces
  `AmeriLife > Affiliate > Agent`, wiring agents by `parentAgentNpn` within their
  affiliate (roots-within-affiliate attach to the affiliate node).
- **Carrier is a sales/appointment relationship.** `buildCarrierGraph()` produces
  `AmeriLife > Carrier > Affiliate > Agent` — a re-organization of the *view*, not
  a change of org. Agents appear under each carrier they sell, with production
  scoped to that carrier slice.
- **Lineage highlight.** `computeLineage()` returns the upline path to root and
  the full downline subtree; the designer applies those as edge classes
  (`edge-up` animated, `edge-down`) and node flags (`onPath`, `inDownline`,
  `dimmed`).
- **Filters keep the tree connected.** `computeVisibleSet()` keeps every matching
  agent *plus its ancestors to root*, so filtered views never leave dangling nodes.

---

## Swapping mock data for a live API

The only data dependency is the flat `AgentHierarchyRecord[]` array. To go live:

```ts
// AgentLineageDesigner.tsx
// const RECORDS = agentHierarchyRecords;
const RECORDS = await fetchAgentHierarchy(); // returns AgentHierarchyRecord[]
```

As long as the API returns the same record shape (`src/types/hierarchy.ts`),
nothing else changes — every transform, view, and panel consumes that array.

---

## Notes

- **Layout engine** is switchable in `utils/layout.ts` via `LAYOUT_ENGINE`
  (`"tidy"` default, `"dagre"` alternative).
- **Design tokens** (palette, per-level colors) live in `utils/theme.ts` and
  mirror the custom colors in `tailwind.config.js`.
- This is a prototype on synthetic mock data — no real PII is present.
