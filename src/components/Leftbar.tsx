// Leftbar.tsx
import { useState } from "react";
import {
  Gamepad2, LayoutGrid, Trophy, Sparkles, Target, Users, BookText,
  LifeBuoy, Globe, DollarSign
} from "lucide-react";
import casinoArt from "../assets/casino-chip.png";
import sportsArt from "../assets/sports-ball.png";
import ClubCard from "./ClubCard";
import SidebarTile from "./SidebarTile";  // ✅ use the new one only

type Item = { icon: any; label: string; badge?: string; soon?: boolean };

export default function Leftbar() {
  const [collapsed, setCollapsed] = useState(false);

  const items: Item[] = [
    { icon: Trophy, label: "Bonus", badge: "200%" },
    { icon: Sparkles, label: "Promotions", badge: "12" },
    { icon: Target, label: "Leaderboard", badge: "12" },
    { icon: Target, label: "Challenges", badge: "12" },
    { icon: Users, label: "Affiliate" },
    { icon: BookText, label: "Blog" },
    { icon: LifeBuoy, label: "Support" },
    { icon: Globe, label: "English" },
    { icon: DollarSign, label: "Dollar (USD)" },
  ];

  return (
    <aside
      className={`${collapsed ? "w-[84px]" : "w-[260px]"} fixed left-0 top-16 bottom-0 z-30 border-r border-[#1E2641]/60 bg-[#0A0D1A]/80 backdrop-blur-md transition-[width] duration-300`}
    >
      <div className="px-3 pt-3 space-y-3">
        <SidebarTile
          collapsed={collapsed}
          icon={<Gamepad2 size={18} />}
          label="Casino"
          art={casinoArt}
          hoverColor="#E63946"   // 🔴 casino red
        />
        <SidebarTile
          collapsed={collapsed}
          icon={<LayoutGrid size={18} />}
          label="Sports"
          art={sportsArt}
          hoverColor="#00C164"  // 🟢 sports green
          comingSoon
          dimmed
        />
        <ClubCard collapsed={collapsed} />
      </div>

      <nav className="mt-4 space-y-1 px-3">
        {items.map((it) => (
          <Row key={it.label} {...it} collapsed={collapsed} />
        ))}
      </nav>
    </aside>
  );
}

function Row({ icon: Icon, label, badge, soon, collapsed }: Item & { collapsed: boolean }) {
  return (
    <button className="group flex w-full items-center gap-3  px-3 py-2 text-sm hover:text-[#00C164]">
      <Icon size={18} className="shrink-0 opacity-90" />
      {!collapsed && (
        <>
          <span className="mr-auto">{label}</span>
          {soon && (
            <span className="rounded-md bg-orange-500/90 px-2 py-0.5 text-[11px] font-semibold text-white">
              Coming Soon
            </span>
          )}
          {badge && (
            <span className="rounded-md bg-[#2EEE9A]/20 px-2 py-0.5 text-[11px] text-[#2EEE9A]">
              {badge}
            </span>
          )}
        </>
      )}
    </button>
  );
}
