"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { GiRingedPlanet } from "react-icons/gi";

export default function NavTransition() {
  const pathName = usePathname();

  const animation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
  };

  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <motion.div
          className="w-screen h-screen z-40 pointer-events-none absolute -bottom-full left-0 flex gap-3 justify-center items-center 
          text-9xl font-bold font-sans bg-white text-black"
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <p>C</p>
          <GiRingedPlanet />
          <p>SM</p>
          <GiRingedPlanet />
          <p>S</p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
