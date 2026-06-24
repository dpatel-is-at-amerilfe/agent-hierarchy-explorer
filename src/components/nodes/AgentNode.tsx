import { Handle, Position, type NodeProps, type Node } from "@xyflow/react";
import { MapPin, Radio, ChevronDown, ChevronRight } from "lucide-react";
import type { LineageNodeData } from "../../types/hierarchy";
import { COLORS, LEVEL_META, STATUS_META } from "../../utils/theme";
import { fmtUSD } from "../../utils/hierarchyTransforms";

export default function AgentNode({ id, data, selected }: NodeProps<Node<LineageNodeData>>) {
  const p = data.person!;
  const meta = LEVEL_META[p.levelName];
  const accent = meta.color;

  const prod = data.carrierContext ? data.slicedProduction ?? 0 : p.productionYtd;
  const pol = data.carrierContext ? data.slicedPolicies ?? 0 : p.policiesYtd;
  const status = data.carrierContext ? data.slicedStatus ?? p.status : p.status;
  const sm = STATUS_META[status];

  const g = data.glow !== false;
  const prodRatio = Math.min(1, prod / (data.prodMax || 1));
  const production = data.renderMode === "production";
  const prodScale = production ? 0.9 + prodRatio * 0.28 : 1;
  const prodGlow = production && g ? 6 + prodRatio * 30 : 0;

  const lowProd = prod < 25000;
  const risk =
    status === "Terminated"
      ? STATUS_META.Terminated.color
      : status === "Pending"
      ? STATUS_META.Pending.color
      : p.health === "At Risk" || lowProd
      ? "#FF8A5B"
      : null;

  const boxShadow = selected
    ? `0 0 0 1.5px ${accent}, 0 0 26px ${accent}aa, 0 0 60px ${accent}55`
    : data.onPath
    ? `0 0 0 1px ${accent}cc, 0 0 18px ${accent}66`
    : data.inDownline
    ? `0 0 0 1px ${COLORS.carrier}66, 0 0 14px ${COLORS.carrier}33`
    : prodGlow
    ? `0 0 ${prodGlow}px ${accent}55, inset 0 1px 0 rgba(255,255,255,.05)`
    : `inset 0 1px 0 rgba(255,255,255,.05), 0 6px 22px rgba(0,0,0,.45)`;

  const agentId = data.carrierContext ? data.slicedAgentId : p.agentIds[0];

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl border    border-white/10 pl-[18px] pr-3 pt-0 pb-3 transition-all"
      style={{
        background: "linear-gradient(160deg, rgba(28,38,62,.96), rgba(14,19,34,.97))",
        boxShadow,
        opacity: data.dimmed ? 0.26 : 1,
        filter: data.dimmed ? "grayscale(.6)" : "none",
        transform: `scale(${prodScale})`,
      }}
    >
      <Handle type="target" position={Position.Left} className="!opacity-0" />
      <span
        className="absolute left-0 top-4 bottom-3 w-[3px] rounded"
        style={{ background: accent, boxShadow: g ? `0 0 12px ${accent}` : "none" }}
      />
      <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
      {risk && (
        <span
          className="absolute right-3 top-4 h-2 w-2 animate-pulse rounded-full"
          style={{ background: risk, boxShadow: `0 0 10px ${risk}` }}
        />
      )}

      <div className="flex items-center justify-between gap-2">
        <div className="truncate text-[16px] font-semibold text-slate-100">{p.name}</div>
        <span
          className="flex-none rounded-md border px-1.5 py-0.5 text-[8.5px] font-bold tracking-wide"
          style={{ color: accent, borderColor: accent + "44", background: accent + "12" }}
        >
          {meta.short}
        </span>
      </div>
      <div className="mt-0.5 truncate text-[10.5px] text-slate-500">
        {p.levelName}
        {data.carrierContext ? ` · ${data.carrierContext}` : ""}
      </div>

      {production ? (
        <div className="mt-2">
          <div className="h-1.5 overflow-hidden rounded bg-white/[.07]">
            <div className="h-full rounded" style={{ width: `${prodRatio * 100}%`, background: `linear-gradient(90deg, ${accent}, #2DE2C8)` }} />
          </div>
          <div className="mt-1 font-mono text-[13px] font-semibold" style={{ color: accent }}>
            {fmtUSD(prod)} <span className="text-[9.5px] font-normal text-slate-500">YTD · {pol} pol</span>
          </div>
        </div>
      ) : (
        <div className="mt-1.5 grid grid-cols-[auto_1fr] gap-x-2 font-mono text-[10px]">
          <span className="text-slate-500">NPN</span>
          <span className="truncate text-right text-slate-300">{p.npn}</span>
          <span className="text-slate-500">ID</span>
          <span className="truncate text-right text-slate-300">{agentId}</span>
          <span className="text-slate-500">YTD</span>
          <span className="truncate text-right font-semibold" style={{ color: accent }}>
            {fmtUSD(prod)} · {pol}p
          </span>
        </div>
      )}

      <div className="mt-1 gap-3 flex flex-wrap gap-2">
        <Chip>
          <MapPin size={9} /> {p.state}
        </Chip>
        <Chip style={{ color: sm.color, borderColor: sm.color + "44" }}>
          <i className="h-[5px] w-[5px] rounded-full" style={{ background: sm.color }} /> {status}
        </Chip>
        {!data.carrierContext && p.carriers.length > 1 && (
          <Chip style={{ color: "#F4B8EC", borderColor: COLORS.carrier + "4d" }}>
            <Radio size={9} /> {p.carriers.length} carriers
          </Chip>
        )}
      </div>
{/* HELLO: This button collapses/expandes the downstream nodes. idk how useful that is, but kept it here if our corporate overlords want it */}
      {/* {data.hasChildren && (
        <button
          data-collapse={id}
          className="absolute bottom-2 right-2 grid h-5 w-5 place-items-center rounded-md border border-white/10 bg-white/5 text-slate-400 hover:bg-white/15 hover:text-slate-100"
        >
          {data.collapsed ? <ChevronRight size={13} /> : <ChevronDown size={13} />}
        </button>
      )} */}
      <Handle type="source" position={Position.Right} className="!opacity-0" />
    </div>
  );
}

function Chip({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[.03] px-1.5 py-0.5 text-[9px] text-slate-400"
      style={style}
    >
      {children}
    </span>
  );
}
