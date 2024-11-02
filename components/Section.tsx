"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1.5, ease: "easeIn" }}
      className={`relative bg-black ${className}`}
    >
      {children}
    </motion.section>
  );
}
