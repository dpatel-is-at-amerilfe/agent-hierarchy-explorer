import { Handle, Position, type NodeProps, type Node } from "@xyflow/react";
import { Building2, ChevronDown, ChevronRight } from "lucide-react";
import type { LineageNodeData } from "../../types/hierarchy";
import { COLORS } from "../../utils/theme";

export default function AffiliateNode({ id, data, selected }: NodeProps<Node<LineageNodeData>>) {
  const accent = COLORS.affiliate;
  const boxShadow = selected
    ? `0 0 0 1.5px ${accent}, 0 0 26px ${accent}aa, 0 0 60px ${accent}55`
    : data.onPath
    ? `0 0 0 1px ${accent}cc, 0 0 18px ${accent}66`
    : `inset 0 1px 0 rgba(255,255,255,.05), 0 6px 22px rgba(0,0,0,.45)`;

  return (
    <div
      className="relative flex h-full w-full items-center gap-3 rounded-2xl border border-white/10 px-1 transition-all"
      style={{
        background: "linear-gradient(160deg, rgba(28,38,62,.96), rgba(14,19,34,.97))",
        boxShadow,
        opacity: data.dimmed ? 0.26 : 1,
        filter: data.dimmed ? "grayscale(.6)" : "none",
      }}
    >
      <Handle type="target" position={Position.Left} className="!opacity-0" />
      <span
        className="absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded"
        style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
      />
      <div
        className="grid h-[34px] w-[34px] flex-none place-items-center rounded-lg border"
        style={{ color: accent, borderColor: accent + "55", background: accent + "14" }}
      >
        <Building2 size={15} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[9px] font-semibold tracking-[0.16em]" style={{ color: accent }}>
          AFFILIATE
        </div>
        <div className="mt-0.5 text-[13.5px] font-semibold text-slate-100">{data.label}</div>
      </div>
      {/* HELLO: This button collapses/expandes the downstream nodes. idk how useful that is, but kept it here if our corporate overlords want it */}
      {/* {data.hasChildren && (
        <button
          data-collapse={id}
          className="grid h-5 w-5 flex-none place-items-center rounded-md border border-white/10 bg-white/5 text-slate-400 hover:bg-white/15 hover:text-slate-100"
        >
          {data.collapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
        </button> */}
      {/* )}     */}
      <Handle type="source" position={Position.Right} className="!opacity-0" />
    </div>
  );
}
