import { ChevronRight } from "lucide-react";
import type { LineageGraph } from "../types/hierarchy";
import { computeBreadcrumb } from "../utils/hierarchyTransforms";
import { COLORS, LEVEL_META } from "../utils/theme";

interface Props {
  graph: LineageGraph;
  selectedId: string | null;
  onPick: (id: string) => void;
}

export default function LineageBreadcrumb({ graph, selectedId, onPick }: Props) {
  const chain = computeBreadcrumb(graph, selectedId);

  return (
    <footer className="z-50 flex h-[42px] flex-none items-center gap-3 overflow-hidden border-t border-line bg-gradient-to-t from-[#101628]/90 to-[#0a0e1a]/70 px-3.5 backdrop-blur-xl">
      <span className="flex-none text-[9.5px] font-semibold tracking-[0.18em] text-slate-500">LINEAGE</span>
      {chain.length === 0 ? (
        <div className="text-[11.5px] text-slate-500">Select any node to trace its lineage to AmeriLife.</div>
      ) : (
        <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:h-0">
          {chain.map((n, i) => {
            const dot =
              n.kind === "root" ? COLORS.rootGlow :
              n.kind === "affiliate" ? COLORS.affiliate :
              n.kind === "carrier" ? COLORS.carrier :
              n.person ? LEVEL_META[n.person.levelName].color : COLORS.teal;
            const last = i === chain.length - 1;
            return (
              <span key={n.id} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={13} className="flex-none text-slate-500" />}
                <button
                  onClick={() => onPick(n.id)}
                  className={"inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11.5px] transition-colors " + (last ? "border-[#2DE2C8]/40 bg-[#2DE2C8]/10 text-slate-100" : "border-line bg-white/[.03] text-slate-400 hover:bg-white/[.07] hover:text-slate-100")}
                >
                  <i className="h-1.5 w-1.5 flex-none rounded-full" style={{ background: dot, boxShadow: `0 0 8px ${dot}` }} />
                  {n.label}
                </button>
              </span>
            );
          })}
        </div>
      )}
    </footer>
  );
}
