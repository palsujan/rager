import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};

const NeonButton = ({ className = "", children, ...rest }: Props) => {
  return (
    <motion.button
      whileHover={{ y: -1, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all",
        "bg-[#00C164]",
        "shadow-[0_0_0_2px_rgba(0,193,100,0.2),0_6px_18px_rgba(0,193,100,0.45)]",
        "hover:shadow-[0_0_0_2px_rgba(0,193,100,0.35),0_10px_26px_rgba(0,193,100,0.65)]",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default NeonButton;
