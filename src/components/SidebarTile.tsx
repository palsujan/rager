import { useState } from "react";

export default function SidebarTile({
  collapsed,
  icon,
  label,
  art,
  comingSoon,
  hoverColor,
}: {
  collapsed: boolean;
  icon: React.ReactNode;
  label: string;
  art: string;
  comingSoon?: boolean;
  dimmed?: boolean;
  hoverColor: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={[
        "group relative w-full overflow-hidden rounded-xl border px-3 py-3 text-left transition duration-300",
        "shadow-[inset_0_1px_0_rgba(255,255,255,.03)]",
      ].join(" ")}
      style={{
        backgroundColor: isHovered ? hoverColor : "#12182C",
        borderColor: isHovered ? "white" : "#1E2641",
        color: isHovered ? "white" : "inherit",
      }}
    >
      <div className="relative z-[5] flex items-center gap-3">
        <div className="grid h-8 w-8 place-items-center">
          {icon}
        </div>
        {!collapsed && <span className="text-[15px] font-medium">{label}</span>}
      </div>

      {!collapsed && (
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-[6px] transition z-[1]"
          style={{
            background: `radial-gradient(closest-side, ${hoverColor}40, transparent 70%)`,
            opacity: isHovered ? 1 : 0.7,
          }}
        />
      )}
      {!collapsed && (
        <img
          src={art}
          alt=""
          className="hover-rotate pointer-events-none absolute right-[-10px] top-[8px] h-16 w-auto select-none transition-all duration-300 ease-in-out group-hover:top-0 group-hover:scale-110 z-[2]"
          draggable={false}
        />
      )}
      {comingSoon && !collapsed && (
        <span
          className={[
            "absolute right-1 top-1 rounded-md bg-[#FF6A00] px-2 py-[2px]",
            "text-xs font-semibold text-white shadow-[0_2px_6px_rgba(0,0,0,.25)]",
            "transition-opacity duration-200",
            isHovered ? "opacity-0" : "opacity-100",
            "z-[10] pointer-events-none",
          ].join(" ")}
        >
          Coming&nbsp;Soon
        </span>
      )}
      <style>
        {`
          @keyframes tiltRotate {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-10deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }
          .hover-rotate { transition: transform 0.3s ease; }
          button:hover .hover-rotate { animation: tiltRotate 0.6s ease-in-out; }
        `}
      </style>
    </button>
  );
}
