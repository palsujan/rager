import { Crown } from "lucide-react";
import gem from "../assets/club-gem.png";

export default function ClubCard({ collapsed }: { collapsed: boolean }) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-xl border px-3 py-3",
        "border-[#1E2641]/70 bg-[#12182C]/70",
        "shadow-[inset_0_1px_0_rgba(255,255,255,.03)]",
        "transition-transform duration-700 ease-in-out"
      ].join(" ")}
    >
      <span
        aria-hidden
        className={[
          "pointer-events-none absolute h-[280px] w-[280px] rounded-full opacity-90 blur-[2px]",
          "bg-[radial-gradient(closest-side,rgba(22,212,123,.35),transparent_60%)]",
          "-left-24 -bottom-24",
          "transition-all duration-[1200ms] ease-in-out",
          "group-hover:-top-24 group-hover:-left-24 group-hover:bottom-auto",
          "group-hover:scale-110"
        ].join(" ")}
      />
      <span
        aria-hidden
        className={[
          "pointer-events-none absolute h-[320px] w-[320px] rounded-full opacity-90 blur-[2px]",
          "bg-[radial-gradient(closest-side,rgba(32,114,255,.35),transparent_60%)]",
          "-top-28 -right-28",
          "transition-all duration-[1200ms] ease-in-out",
          "group-hover:-bottom-28 group-hover:-right-28 group-hover:top-auto",
          "group-hover:scale-110"
        ].join(" ")}
      />


      <div className="relative z-10">
        <div className="mb-2 flex items-center justify-center gap-2">
          <Crown size={18} className="opacity-80" />
          {!collapsed && (
            <span className="text-[15px] font-medium text-center">
              R.A.G.E.R. Club
            </span>
          )}
        </div>

        <div className="flex flex-col items-center gap-2">
          <div
            className={[
              "relative grid h-16 w-16 place-items-center rounded-full",
              "transition-transform duration-700 ease-in-out",
              "origin-center",                  
              "group-hover:scale-[1.15]"        
            ].join(" ")}
            style={{
              background: "conic-gradient(#16D47B 0 24%, #2A355A 24% 100%)",
            }}
          >
            <div className="absolute inset-[5px] rounded-full bg-[#0F1426]" />
            <img
              src={gem}
              alt=""
              className="relative z-10 h-8 w-8 select-none"
              draggable={false}
            />
          </div>

          {!collapsed && (
            <p className="text-sm leading-snug text-center">
              Login to join the <br />
              R.A.G.E.R. Club
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
