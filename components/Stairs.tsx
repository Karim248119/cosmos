import React from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import { GiRingedPlanet } from "react-icons/gi";
import { IoPlanet } from "react-icons/io5";
export default function Stairs() {
  const animation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
  };
  const cosmos = [
    "C",
    <span className="rounded-full neon-bg py-6 px-4 text-black">
      <IoPlanet size={60} />
    </span>,
    "S",
    "M",
    <span className="rounded-full neon-bg py-6 px-4 text-black">
      <IoPlanet size={60} />
    </span>,
    "S",
  ];
  return (
    <>
      {cosmos.map((item, index) => {
        return (
          <motion.div
            key={index}
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            className=" h-full w-full relative bg-black neon-text flex  justify-center items-center text-9xl font-bold"
          >
            {item}
          </motion.div>
        );
      })}
    </>
  );
}
