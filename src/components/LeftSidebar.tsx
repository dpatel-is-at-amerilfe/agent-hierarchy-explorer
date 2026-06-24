import { useState } from "react";
import { Layers, Building2, Radio, Activity, Filter, ChevronDown, ChevronRight } from "lucide-react";
import type { FilterState, RenderMode, TopologyMode } from "../types/hierarchy";

interface Props {
  topology: TopologyMode;
  renderMode: RenderMode;
  setView: (t: TopologyMode, r: RenderMode) => void;
  counts: { agents: number; affiliates: number; carriers: number };
  options: Record<string, readonly string[]>;
  filters: FilterState;
  toggleFilter: (group: keyof FilterState, value: string) => void;
  clearFilters: () => void;
  activeFilterCount: number;
}

const FILTER_GROUPS: { name: string; key: keyof FilterState }[] = [
  { name: "Carrier", key: "carriers" },
  { name: "Affiliate", key: "affiliates" },
  { name: "Level", key: "levels" },
  { name: "Line of Business", key: "lobs" },
  { name: "State", key: "states" },
  { name: "Status", key: "statuses" },
];

const OPTION_KEY: Record<string, string> = {
  carriers: "carriers", affiliates: "affiliates", levels: "levels",
  lobs: "lobs", statuses: "statuses", states: "states",
};

export default function LeftSidebar({
  topology, renderMode, setView, counts, options, filters, toggleFilter, clearFilters, activeFilterCount,
}: Props) {
  const [open, setOpen] = useState<string>("");

  return (
    <aside className="flex w-[268px] flex-none flex-col overflow-hidden border-r border-line bg-glass backdrop-blur-xl">
      <PanelHead icon={<Layers size={14} />}>Lineage Views</PanelHead>
      <div className="flex flex-col gap-1.5 px-2.5 pb-1.5">
        <ViewBtn icon={<Building2 size={15} />} label="Affiliate View" sub="Affiliate → Agent"
          on={topology === "affiliate" && renderMode === "hierarchy"} onClick={() => setView("affiliate", "hierarchy")} />
        <ViewBtn icon={<Radio size={15} />} label="Carrier View" sub="Carrier → Affiliate → Agent"
          on={topology === "carrier" && renderMode === "hierarchy"} onClick={() => setView("carrier", "hierarchy")} />
<ViewBtn icon={<Activity size={15} />} label="Production Flow" sub="Glow scales with YTD"
          on={renderMode === "production"} onClick={() => setView(topology, renderMode === "production" ? "hierarchy" : "production")} />
      </div>

      <div className="flex gap-1.5 border-b border-line px-2.5 pb-3 pt-2.5">
        <Stat label="Agents" value={counts.agents} accent="#4F8BFF" />
        <Stat label="Affiliates" value={counts.affiliates} accent="#34E5A8" />
        <Stat label="Carriers" value={counts.carriers} accent="#E84FD6" />
      </div>

      <div className="flex items-center justify-between px-3.5 pb-2.5 pt-3 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        <span className="flex items-center gap-2"><Filter size={14} className="text-[#2DE2C8]" /> Filters</span>
        {activeFilterCount > 0 && (
          <button className="text-[10.5px] normal-case tracking-normal text-[#2DE2C8]" onClick={clearFilters}>
            Clear ({activeFilterCount})
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-2.5 pb-3.5">
        {FILTER_GROUPS.map((g) => {
          const isOpen = open === g.key;
          const count = filters[g.key].size;
          const opts = options[OPTION_KEY[g.key]] || [];
          return (
            <div key={g.key} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? "" : g.key)}
                className="flex w-full items-center gap-2 px-1.5 py-2.5 text-[12px] text-slate-100"
              >
                {isOpen ? <ChevronDown size={13} className="text-slate-500" /> : <ChevronRight size={13} className="text-slate-500" />}
                <span className="flex-1 text-left">{g.name}</span>
                {count > 0 && <em className="not-italic rounded-md bg-[#2DE2C8]/20 px-1.5 py-px text-[10px] text-[#2DE2C8]">{count}</em>}
              </button>
              {isOpen && (
                <div className="flex max-h-[190px] flex-col gap-0.5 overflow-y-auto px-1 pb-2.5">
                  {opts.map((o) => {
                    const sel = filters[g.key].has(o);
                    return (
                      <button
                        key={o}
                        onClick={() => toggleFilter(g.key, o)}
                        className={"flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-[11.5px] transition-colors " + (sel ? "text-slate-100" : "text-slate-400 hover:bg-white/5 hover:text-slate-100")}
                      >
                        <span className={"grid h-3.5 w-3.5 flex-none place-items-center rounded border-[1.5px] " + (sel ? "border-[#2DE2C8] bg-[#2DE2C8]/20" : "border-slate-600")}>
                          {sel && <span className="h-[7px] w-[7px] rounded-sm bg-[#2DE2C8] shadow-[0_0_6px_#2DE2C8]" />}
                        </span>
                        {o}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function PanelHead({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 px-3.5 pb-2.5 pt-3.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
      <span className="text-[#2DE2C8]">{icon}</span>
      {children}
    </div>
  );
}
function ViewBtn({ icon, label, sub, on, onClick }: { icon: React.ReactNode; label: string; sub: string; on: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={"flex items-center gap-3 rounded-[10px] border px-2.5 py-2.5 text-left transition-all " + (on ? "border-[#2DE2C8]/40 bg-gradient-to-b from-[#2DE2C8]/[.16] to-[#2DE2C8]/[.05] shadow-[0_0_16px_rgba(45,226,200,.14)]" : "border-transparent bg-white/[.03] hover:border-line hover:bg-white/[.06]")}
    >
      <span className={"grid h-[30px] w-[30px] flex-none place-items-center rounded-lg " + (on ? "bg-gradient-to-br from-[#2DE2C8] to-[#22D3EE] text-[#0A0F1C]" : "bg-white/5 text-[#2DE2C8]")}>{icon}</span>
      <span className="flex flex-col leading-tight">
        <b className="text-[12.5px] font-semibold text-slate-100">{label}</b>
        <i className="not-italic text-[10.5px] text-slate-500">{sub}</i>
      </span>
    </button>
  );
}
function Stat({ label, value, accent }: { label: string; value: number; accent: string }) {
  return (
    <div className="flex-1 rounded-[10px] border border-line bg-white/[.025] px-1.5 py-2.5 text-center">
      <div className="font-mono text-lg font-bold" style={{ color: accent }}>{value}</div>
      <div className="mt-0.5 text-[9.5px] uppercase tracking-wider text-slate-500">{label}</div>
    </div>
  );
}
