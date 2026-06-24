import { useState } from "react";
import { CircleDot, X } from "lucide-react";
import { COLORS, LEVEL_META } from "../utils/theme";

export default function LegendPanel() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 rounded-[10px] border border-line bg-glass px-2.5 py-1.5 text-[11px] text-slate-400 backdrop-blur-xl"
      >
        <CircleDot size={13} /> Legend
      </button>
    );
  }

  const items = [
    { color: COLORS.rootGlow, label: "AmeriLife" },
    { color: COLORS.affiliate, label: "Affiliate" },
    { color: COLORS.carrier, label: "Carrier" },
    ...Object.entries(LEVEL_META).map(([k, m]) => ({ color: m.color, label: k })),
  ];

  return (
    <div className="absolute bottom-4 right-4 z-20 w-[200px] rounded-[13px] border border-line bg-glass p-3 backdrop-blur-xl">
      <div className="mb-2.5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        <span className="flex items-center gap-1.5"><CircleDot size={12} /> Legend</span>
        <X size={13} className="cursor-pointer" onClick={() => setOpen(false)} />
      </div>
      <div className="flex flex-col gap-1.5">
        {items.map((it) => (
          <span key={it.label} className="flex items-center gap-2 text-[10.5px] text-slate-400">
            <i className="h-2.5 w-2.5 flex-none rounded-full" style={{ background: it.color, boxShadow: `0 0 7px ${it.color}` }} />
            {it.label}
          </span>
        ))}
      </div>
      <div className="mt-2.5 flex flex-col gap-1.5 border-t border-line pt-2.5 text-[10px] text-slate-400">
        <span className="flex items-center gap-2"><i className="h-0.5 w-4 flex-none rounded bg-gradient-to-r from-[#22D3EE] to-[#2DE2C8]" /> Upline path</span>
        <span className="flex items-center gap-2"><i className="h-0.5 w-4 flex-none rounded bg-[#E84FD6]" /> Downline</span>
        <span className="flex items-center gap-2"><i className="h-0.5 w-4 flex-none rounded bg-[#FF5470] shadow-[0_0_6px_#FF5470]" /> Risk / low YTD</span>
      </div>
    </div>
  );
}
