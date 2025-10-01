import { motion } from "framer-motion";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={[
        "rounded-lg bg-[#01AA61] px-5 py-2.5 text-sm font-semibold text-white",
        className || "",
      ].join(" ")}
    >
      {children}
    </motion.button>
  );
};

export default Button;
