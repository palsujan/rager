import { motion } from "framer-motion";
import NeonButton from "./NeonButton";
import React from "react";
import Avatar from "../assets/avtar.png";

type Milestone = { label: string; status: "done" | "current" | "upcoming" };

const ChallengeCard: React.FC<{
  title?: string;
  amount?: string;
  cta?: string;
  winningText?: string;
  countdown?: string;
  milestones?: Milestone[];
  avatarSrc?: string;
}> = ({
  title = "Deposit $50,000 on wallet via crypto and win upto",
  amount = "$25,000",
  cta = "Deposit Now",
  winningText = "$23.5K / $40K Winning",
  countdown = "03h:23m:20s",
  milestones = [
    { label: "$134K", status: "done" },
    { label: "$220K", status: "done" },
    { label: "$530K", status: "current" },
    { label: "$840K", status: "upcoming" },
  ],
}) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className={[
        "rounded-2xl border border-[#26304F]",
        "bg-[#0F162B]",
        "p-4 md:p-5",
        "shadow-[0_20px_40px_rgba(0,0,0,0.35)]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="max-w-[70%] text-[13px] leading-5 text-[#9AA4BF]">
          {title}
        </div>
        <div className="shrink-0 text-3xl md:text-[34px] leading-none font-extrabold text-[#00C164]">
          {amount}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs md:text-[13px]">
        <span className="font-semibold text-[#FF8A3C]">{winningText}</span>
        <span className="font-semibold text-[#FF3C86]">{countdown}</span>
      </div>

      <MilestoneTrack milestones={milestones} avatarSrc={Avatar} />

      <div className="mt-4 flex items-center justify-center gap-3">
        <NeonButton>{cta}</NeonButton>
        <Pill>4/10 Milestones</Pill>
      </div>
    </motion.div>
  );
};

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className={[
      "rounded-md border border-[#26304F] bg-[#121B33]",
      "px-3 py-1.5 text-xs text-[#9AA4BF]",
    ].join(" ")}
  >
    {children}
  </div>
);

const MilestoneTrack: React.FC<{
  milestones: { label: string; status: "done" | "current" | "upcoming" }[];
  avatarSrc: string;
}> = ({ milestones, avatarSrc }) => {
  const segmentCount = milestones.length - 1;
  const currentIdx = indexOfCurrent(milestones);

  return (
    <div className="mt-4 md:mt-5">
      <div className="relative mx-1 mt-3 h-[8px] rounded-full bg-[#1D2844]">
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: `${(currentIdx / segmentCount) * 100}%`,
            background:
              "linear-gradient(90deg, rgba(0,193,100,0.9) 0%, rgba(0,193,100,0.55) 100%)",
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-1">
          <div className="flex items-center justify-between">
            {milestones.map((m, i) => (
              <Node
                key={i}
                status={m.status}
                avatarSrc={m.status === "current" ? avatarSrc : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between px-0.5 text-[11px] text-[#9AA4BF]">
        {milestones.map((m, i) => (
          <span key={i}>{m.label}</span>
        ))}
      </div>
    </div>
  );
};

const Node: React.FC<{
  status: "done" | "current" | "upcoming";
  avatarSrc?: string;
}> = ({ status, avatarSrc }) => {
  if (status === "current") {
    return (
      <div className="relative flex h-10 w-10 items-center justify-center">
        <span
          className="absolute inset-0 rounded-full blur-md opacity-80"
          style={{
            boxShadow:
              "0 0 0 6px rgba(0,193,100,0.18), 0 0 24px rgba(0,193,100,0.6)",
          }}
        />
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00C16422] to-transparent" />
        <img
          src={avatarSrc}
          alt="current"
          className="z-[1] h-8 w-8 rounded-full border-2 border-[#00C164]"
          draggable={false}
        />
      </div>
    );
  }

  if (status === "done") {
    return (
      <div
        className={[
          "flex h-7 w-7 items-center justify-center rounded-full",
          "bg-[#142235] border border-[#213055]",
        ].join(" ")}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          role="img"
          aria-label="done"
        >
          <path
            d="M20 6L9 17l-5-5"
            stroke="#00C164"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={[
        "h-7 w-7 rounded-full",
        "border-2 border-[#4C5577] bg-transparent",
      ].join(" ")}
    />
  );
};

const indexOfCurrent = (
  milestones: { status: "done" | "current" | "upcoming" }[]
): number => {
  const idx = milestones.findIndex((m) => m.status === "current");
  return Math.max(0, idx);
};

export default ChallengeCard;
