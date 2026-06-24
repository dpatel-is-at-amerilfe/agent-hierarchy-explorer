import { CircleDot, Network, Star, Building2, Radio } from "lucide-react";
import type { AgentHierarchyRecord, LineageGraph, Person } from "../types/hierarchy";
import { COLORS, LEVEL_META, STATUS_META } from "../utils/theme";
import { fmtUSD, fmtFull } from "../utils/hierarchyTransforms";

interface Props {
  selectedId: string | null;
  graph: LineageGraph;
  persons: Map<string, Person>;
  records: AgentHierarchyRecord[];
  onPick: (id: string) => void;
}

export default function PropertiesPanel({ selectedId, graph, persons, records, onPick }: Props) {
  const node = selectedId ? graph.nodes.get(selectedId) : null;

  return (
    <aside className="flex w-[312px] flex-none flex-col overflow-hidden border-l border-line bg-glass backdrop-blur-xl">
      <Head>{node ? labelFor(node.kind) : "Properties"}</Head>
      {!node ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3.5 px-8 text-center text-slate-600">
          <Network size={30} className="text-slate-500/30" />
          <p className="max-w-[200px] text-[12px] leading-relaxed">
            Select a node on the canvas to inspect its details, upline, and downline.
          </p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-3.5 pb-5">
          {node.kind === "agent" && <AgentProps node={node} graph={graph} onPick={onPick} />}
          {node.kind === "root" && <RootProps persons={persons} records={records} />}
          {node.kind === "affiliate" && <AffiliateProps node={node} persons={persons} />}
          {node.kind === "carrier" && <CarrierProps node={node} records={records} />}
        </div>
      )}
    </aside>
  );
}

function labelFor(kind: string) {
  return kind === "agent" ? "Agent Properties" : kind === "affiliate" ? "Affiliate Summary" : kind === "carrier" ? "Carrier Summary" : "Organization";
}

/* ---- AGENT ---- */
function AgentProps({ node, graph, onPick }: { node: any; graph: LineageGraph; onPick: (id: string) => void }) {
  const p: Person = node.person;
  const meta = LEVEL_META[p.levelName];
  const parentId = graph.parentOf.get(node.id);
  const parent = parentId ? graph.nodes.get(parentId) : null;
  const childCount = (graph.childrenOf.get(node.id) || []).length;
  const prod = node.carrierContext ? node.slicedProduction : p.productionYtd;
  const pol = node.carrierContext ? node.slicedPolicies : p.policiesYtd;
  const status = node.carrierContext ? node.slicedStatus : p.status;
  const sm = STATUS_META[status as keyof typeof STATUS_META];

  return (
    <>
      <Hero accent={meta.color} title={p.name} role={p.levelName}
        avatar={<span>{p.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>}
        status={{ label: status, color: sm.color }} />
      <Section title="Identity">
        <KV k="Agent NPN" v={p.npn} mono />
        <KV k="Agent ID" v={node.carrierContext ? node.slicedAgentId : p.agentIds.join(", ")} mono />
        <KV k="Level" v={`${p.levelName} (L${p.levelId})`} />
        <KV k="Affiliate" v={p.affiliateName} />
        <KV k="State" v={p.state} />
      </Section>
      <Section title="Production (YTD)">
        <div className="mb-2 flex gap-2">
          <Metric label="Premium" value={fmtFull(prod)} accent={meta.color} />
          <Metric label="Policies" value={pol} accent="#34E5A8" />
        </div>
        {node.carrierContext && (
          <div className="rounded-lg border border-[#E84FD6]/15 bg-[#E84FD6]/[.06] px-2.5 py-1.5 text-[10px] leading-relaxed text-slate-500">
            Scoped to {node.carrierContext}. Person total: {fmtFull(p.productionYtd)}.
          </div>
        )}
      </Section>
      <Section title="Carrier Appointments">
        <Tags items={p.carriers} carrier />
      </Section>
      <Section title="Lines of Business">
        <Tags items={p.lobs} />
      </Section>
      <Section title="Lineage">
        <KV k="Direct upline" v={parent ? parent.label : "AmeriLife (root)"} onClick={parent ? () => onPick(parent.id) : undefined} />
        <KV k="Direct downline" v={`${childCount} agent${childCount === 1 ? "" : "s"}`} />
      </Section>
      <Section title="Dates">
        <KV k="Effective" v={p.effectiveDate} mono />
        {p.terminationDate && <KV k="Terminated" v={p.terminationDate} mono danger />}
      </Section>
    </>
  );
}

/* ---- ROOT ---- */
function RootProps({ persons, records }: { persons: Map<string, Person>; records: AgentHierarchyRecord[] }) {
  const total = [...persons.values()].reduce((s, p) => s + p.productionYtd, 0);
  const multi = [...persons.values()].filter((p) => p.carriers.length > 1).length;
  return (
    <>
      <Hero accent={COLORS.rootGlow} title="AmeriLife" role="Root organization" avatar={<Star size={18} />} />
      <Section title="Network Summary">
        <div className="mb-2 flex gap-2">
          <Metric label="People" value={persons.size} accent="#4F8BFF" />
          <Metric label="Records" value={records.length} accent="#E84FD6" />
        </div>
        <div className="flex gap-2">
          <Metric label="Total YTD" value={fmtUSD(total)} accent="#34E5A8" />
          <Metric label="Multi-carrier" value={multi} accent="#A78BFA" />
        </div>
      </Section>
    </>
  );
}

/* ---- AFFILIATE ---- */
function AffiliateProps({ node, persons }: { node: any; persons: Map<string, Person> }) {
  const people = [...persons.values()].filter((p) => p.affiliateId === node.affiliateId);
  const active = people.filter((p) => p.status === "Active").length;
  const carriers = new Set<string>();
  people.forEach((p) => p.carriers.forEach((c) => carriers.add(c)));
  const total = people.reduce((s, p) => s + p.productionYtd, 0);
  return (
    <>
      <Hero accent={COLORS.affiliate} title={node.label} role={node.carrierContext ? `Under ${node.carrierContext}` : "Affiliate organization"} avatar={<Building2 size={17} />} />
      <Section title="Summary">
        <div className="mb-2 flex gap-2">
          <Metric label="Agents" value={people.length} accent="#4F8BFF" />
          <Metric label="Active" value={active} accent="#34E5A8" />
        </div>
        <div className="flex gap-2">
          <Metric label="Carriers" value={carriers.size} accent="#E84FD6" />
          <Metric label="Total YTD" value={fmtUSD(total)} accent="#A78BFA" />
        </div>
      </Section>
      <Section title="Carriers represented">
        <Tags items={[...carriers].sort()} carrier />
      </Section>
    </>
  );
}

/* ---- CARRIER ---- */
function CarrierProps({ node, records }: { node: any; records: AgentHierarchyRecord[] }) {
  const rows = records.filter((r) => r.carrier === node.carrier);
  const affs = new Set(rows.map((r) => r.affiliateId));
  const agents = new Set(rows.map((r) => r.agentNpn));
  const total = rows.reduce((s, r) => s + r.productionYtd, 0);
  const lobs = new Set(rows.map((r) => r.lineOfBusiness));
  return (
    <>
      <Hero accent={COLORS.carrier} title={node.carrier} role="Carrier appointment" avatar={<Radio size={17} />} />
      <Section title="Summary">
        <div className="mb-2 flex gap-2">
          <Metric label="Affiliates" value={affs.size} accent="#4F8BFF" />
          <Metric label="Agents" value={agents.size} accent="#A78BFA" />
        </div>
        <div className="flex gap-2">
          <Metric label="Total YTD" value={fmtUSD(total)} accent="#34E5A8" />
          <Metric label="LOBs" value={lobs.size} accent="#E84FD6" />
        </div>
      </Section>
      <Section title="Lines of business">
        <Tags items={[...lobs].sort()} />
      </Section>
    </>
  );
}

/* ---- shared bits ---- */
function Head({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 px-3.5 pb-2.5 pt-3.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
      <CircleDot size={14} className="text-[#2DE2C8]" /> {children}
    </div>
  );
}
function Hero({ accent, title, role, avatar, status }: { accent: string; title: string; role: string; avatar: React.ReactNode; status?: { label: string; color: string } }) {
  return (
    <div className="relative mb-3.5 flex items-center gap-3 rounded-[13px] border bg-white/[.03] p-3" style={{ borderColor: accent + "44" }}>
      <div className="grid h-[42px] w-[42px] flex-none place-items-center rounded-[11px] border text-sm font-bold" style={{ background: accent + "1a", color: accent, borderColor: accent + "55" }}>
        {avatar}
      </div>
      <div>
        <div className="text-[15px] font-semibold text-slate-100">{title}</div>
        <div className="mt-px text-[11px]" style={{ color: accent }}>{role}</div>
      </div>
      {status && (
        <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-md border px-1.5 py-0.5 text-[9.5px]" style={{ color: status.color, borderColor: status.color + "44", background: status.color + "12" }}>
          <i className="h-[5px] w-[5px] rounded-full" style={{ background: status.color }} /> {status.label}
        </span>
      )}
    </div>
  );
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-3.5">
      <div className="mb-2 text-[9.5px] font-semibold uppercase tracking-[0.15em] text-slate-500">{title}</div>
      {children}
    </div>
  );
}
function KV({ k, v, mono, danger, onClick }: { k: string; v: React.ReactNode; mono?: boolean; danger?: boolean; onClick?: () => void }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-slate-500/[.07] py-1.5">
      <span className="flex-none text-[11px] text-slate-500">{k}</span>
      {onClick ? (
        <button onClick={onClick} className="text-right text-[11.5px] text-[#2DE2C8] hover:underline">{v}</button>
      ) : (
        <span className={"break-words text-right text-[11.5px] " + (mono ? "font-mono " : "") + (danger ? "text-[#FF8095]" : "text-slate-100")}>{v}</span>
      )}
    </div>
  );
}
function Metric({ label, value, accent }: { label: string; value: React.ReactNode; accent: string }) {
  return (
    <div className="flex-1 rounded-[10px] border border-line bg-white/[.025] p-2.5">
      <div className="font-mono text-[17px] font-bold" style={{ color: accent }}>{value}</div>
      <div className="mt-0.5 text-[9.5px] uppercase tracking-wider text-slate-500">{label}</div>
    </div>
  );
}
function Tags({ items, carrier }: { items: string[]; carrier?: boolean }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((it) => (
        <span key={it} className="inline-flex items-center gap-1 rounded-md border bg-white/[.03] px-2 py-0.5 text-[10.5px]"
          style={carrier ? { borderColor: "#E84FD644", color: "#F4B8EC" } : { borderColor: "rgba(120,150,200,.12)", color: "#8A97B5" }}>
          {carrier && <Radio size={9} />} {it}
        </span>
      ))}
    </div>
  );
}
