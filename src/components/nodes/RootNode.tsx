import { Handle, Position, type NodeProps, type Node } from "@xyflow/react";
import { Star } from "lucide-react";
import type { LineageNodeData } from "../../types/hierarchy";
import { COLORS } from "../../utils/theme";

export default function RootNode({ data, selected }: NodeProps<Node<LineageNodeData>>) {
  const accent = COLORS.rootGlow;
  const boxShadow = selected
    ? `0 0 0 1.5px ${accent}, 0 0 28px ${accent}aa, 0 0 64px ${accent}55`
    : data.onPath
    ? `0 0 0 1px ${accent}cc, 0 0 20px ${accent}66`
    : `inset 0 1px 0 rgba(255,255,255,.06), 0 8px 26px rgba(0,0,0,.5)`;

  return (
    <div
      className="group relative flex h-full w-full items-center gap-3 rounded-2xl border border-white/10 px-4 transition-all"
      style={{
        background: "linear-gradient(160deg, rgba(40,70,120,.5), rgba(14,19,34,.97))",
        boxShadow,
        opacity: data.dimmed ? 0.26 : 1,
      }}
    >
      <Handle type="target" position={Position.Left} className="!opacity-0" />
      <span
        className="absolute left-0 top-3 bottom-3 w-[3px] rounded"
        style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
      />
      <div
        className="grid h-9 w-9 flex-none place-items-center rounded-lg border"
        style={{ color: accent, borderColor: accent + "55", background: accent + "14" }}
      >
        <Star size={18} />
      </div>
      <div className="min-w-0">
        <div className="text-[14px] font-semibold tracking-[0.16em]" style={{ color: accent }}>
          ROOT ORG
        </div>
        <div className="mt-1.5 truncate text-[19px] font-semibold text-slate-50">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Right} className="!opacity-0" />
    </div>
  );
}
