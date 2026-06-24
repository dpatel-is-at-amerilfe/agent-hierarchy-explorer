import { Search, Maximize2, Download, RefreshCw, Sparkles, X, Network, Building2, Radio } from "lucide-react";
import type { TopologyMode } from "../types/hierarchy";

interface Props {
  topology: TopologyMode;
  setTopology: (m: TopologyMode) => void;
  glow: boolean;
  setGlow: (b: boolean) => void;
  query: string;
  setQuery: (s: string) => void;
  onSearch: () => void;
  onReset: () => void;
  onFit: () => void;
  onExport: () => void;
}

export default function TopToolbar({
  topology, setTopology, glow, setGlow, query, setQuery, onSearch, onReset, onFit, onExport,
}: Props) {
  return (
    <header className="z-50 flex h-[54px] flex-none items-center justify-between border-b border-line bg-gradient-to-b from-[#101628]/90 to-[#0a0e1a]/70 px-3.5 backdrop-blur-xl">
      <div className="flex items-center gap-3.5">
        <div className="grid h-8 w-8 place-items-center rounded-[9px] bg-gradient-to-br from-[#2DE2C8] to-[#22D3EE] text-[#0A0F1C] shadow-[0_0_18px_rgba(45,226,200,.5)]">
          <Network size={17} />
        </div>
        <div>
          <div className="text-[9px] font-semibold tracking-[0.18em] text-slate-500">AMERILIFE · ENTERPRISE DATA</div>
          <div className="mt-px text-[15px] font-semibold">Interactive Agent Lineage Explorer</div>
        </div>
        <div className="ml-1.5 flex gap-[3px] rounded-[10px] border border-line bg-white/[.04] p-[3px]">
          <SegBtn active={topology === "affiliate"} onClick={() => setTopology("affiliate")}>
            <Building2 size={13} /> Affiliate-first
          </SegBtn>
          <SegBtn active={topology === "carrier"} onClick={() => setTopology("carrier")}>
            <Radio size={13} /> Carrier-first
          </SegBtn>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex h-[34px] w-[248px] items-center gap-2 rounded-[9px] border border-line bg-white/[.045] px-2.5 text-slate-400 focus-within:border-[#2DE2C8]/50 focus-within:shadow-[0_0_14px_rgba(45,226,200,.18)]">
          <Search size={14} />
          <input
            value={query}
            placeholder="Search name, NPN, Agent ID…"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
            className="flex-1 bg-transparent text-[12.5px] text-slate-100 outline-none placeholder:text-slate-600"
          />
          {query && <X size={13} className="cursor-pointer" onClick={() => setQuery("")} />}
        </div>
        <TBtn title="Reset view" onClick={onReset}><RefreshCw size={15} /></TBtn>
        <TBtn title="Fit to screen" onClick={onFit}><Maximize2 size={15} /></TBtn>
        <TBtn title="Export current view" onClick={onExport}><Download size={15} /></TBtn>
      </div>
    </header>
  );
}

function SegBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={
        "flex items-center gap-1.5 rounded-[7px] px-2.5 py-1.5 text-[12px] font-medium transition-all " +
        (active
          ? "bg-gradient-to-b from-[#4F8BFF]/[.22] to-[#4F8BFF]/[.08] text-[#cfe0ff] shadow-[inset_0_0_0_1px_rgba(79,139,255,.4),0_0_14px_rgba(79,139,255,.25)]"
          : "text-slate-400 hover:text-slate-100")
      }
    >
      {children}
    </button>
  );
}
function TBtn({ title, onClick, active, children }: { title: string; onClick: () => void; active?: boolean; children: React.ReactNode }) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={
        "grid h-[34px] w-[34px] place-items-center rounded-[9px] border transition-all " +
        (active
          ? "border-transparent bg-gradient-to-br from-[#2DE2C8] to-[#22D3EE] text-[#0A0F1C] shadow-[0_0_16px_rgba(45,226,200,.45)]"
          : "border-line bg-white/[.045] text-slate-400 hover:border-slate-500/40 hover:bg-white/[.08] hover:text-slate-100")
      }
    >
      {children}
    </button>
  );
}
