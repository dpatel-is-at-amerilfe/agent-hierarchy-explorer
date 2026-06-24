/* ===========================================================================
 * Domain + view-model types for the Agent Lineage Explorer.
 * ===========================================================================
 * The API contract is `AgentHierarchyRecord`. Everything else is derived in
 * utils/hierarchyTransforms.ts — keep rendering components free of raw records.
 */

export type LevelName =
  | "IMO / Top Agency"
  | "Agency Principal"
  | "Regional Manager"
  | "District Manager"
  | "Agent"
  | "Writing Agent";

export type AgentStatus = "Active" | "Pending" | "Terminated";

export type LineageHealth = "Healthy" | "High Performing" | "Pending" | "At Risk";

/** One carrier-specific production/relationship row (the raw API shape). */
export interface AgentHierarchyRecord {
  rowId: string;
  rootOrg: string;
  agentName: string;
  agentNpn: string;
  agentId: string;
  parentAgentNpn: string | null;
  levelName: LevelName;
  levelId: number;
  lineOfBusiness: string;
  affiliateId: string;
  affiliateName: string;
  carrier: string;
  status: AgentStatus;
  state: string;
  effectiveDate: string;
  terminationDate: string | null;
  productionYtd: number;
  policiesYtd: number;
  allAgentIdsForNpn: string[];
  carriersForNpn: string[];
  hierarchyPathAffiliateFirst: string;
  hierarchyPathCarrierFirst: string;
  lineageHealth: LineageHealth;
}

/** A distinct person, collapsed by NPN across all their carrier rows. */
export interface Person {
  npn: string;
  name: string;
  affiliateId: string;
  affiliateName: string;
  levelName: LevelName;
  levelId: number;
  parentNpn: string | null;
  state: string;
  status: AgentStatus;
  effectiveDate: string;
  terminationDate: string | null;
  agentIds: string[];
  carriers: string[];
  lobs: string[];
  productionYtd: number;
  policiesYtd: number;
  health: LineageHealth;
  rows: AgentHierarchyRecord[];
}

export type TopologyMode = "affiliate" | "carrier";
export type RenderMode = "hierarchy" | "production";
export type NodeKind = "root" | "affiliate" | "carrier" | "agent";

/** Payload carried by every React Flow node (node.data). */
export interface LineageNodeData {
  kind: NodeKind;
  label: string;
  // group nodes
  affiliateId?: string;
  carrier?: string;
  carrierContext?: string;
  // agent nodes
  person?: Person;
  slicedProduction?: number;
  slicedPolicies?: number;
  slicedAgentId?: string;
  slicedStatus?: AgentStatus;
  // selection / render flags (set by the container each render)
  selected?: boolean;
  dimmed?: boolean;
  onPath?: boolean;
  inDownline?: boolean;
  renderMode?: RenderMode;
  prodMax?: number;
  hasChildren?: boolean;
  collapsed?: boolean;
  glow?: boolean;
  /** React Flow requires node data to be indexable. */
  [key: string]: unknown;
}

export interface FilterState {
  carriers: Set<string>;
  affiliates: Set<string>;
  states: Set<string>;
  statuses: Set<string>;
  lobs: Set<string>;
  levels: Set<string>;
}

/** Adjacency view of a built topology, independent of layout. */
export interface LineageGraph {
  /** id -> node data (no positions yet) */
  nodes: Map<string, LineageNodeData & { id: string; width: number; height: number }>;
  childrenOf: Map<string, string[]>;
  parentOf: Map<string, string>;
  rootId: string;
}
