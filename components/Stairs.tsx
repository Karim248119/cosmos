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
    <span className="rounded-full neon-bg md:py-6 py-2 md:px-4 px-1 text-black">
      <IoPlanet className="md:text-8xl text-3xl" />
    </span>,
    "S",
    "M",
    <span className="rounded-full neon-bg md:py-6 py-2 md:px-4 px-1 text-black">
      <IoPlanet className="md:text-8xl text-3xl" />
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
            className=" h-full w-full relative bg-black neon-text flex  justify-center items-center md:text-9xl text-6xl font-bold"
          >
            {item}
          </motion.div>
        );
      })}
    </>
  );
}
