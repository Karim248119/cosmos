"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GiRingedPlanet } from "react-icons/gi";

export default function Nav() {
  const navlist = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Episodes",
      link: "/Episodes",
    },
    {
      id: 3,
      name: "Contact",
      link: "/Contact",
    },
  ];
  const path = usePathname();
  return (
    <div className=" h-[15vh]  w-screen flex justify-between items-center md:px-20 px-5  absolute top-0 left-0 z-20 ">
      <GiRingedPlanet className="md:text-4xl text-2xl" />

      <div className="flex justify-center items-center md:gap-8 gap-2 md:text-sm text-[10px] font-share-tech-mono">
        {navlist.map((item, i) => (
          <React.Fragment key={item.id}>
            <Link
              href={item.link}
              className={`neon-text-hover ${
                path === item.link ? "neon-text" : ""
              }`}
            >
              {item.name}
            </Link>
            {i < 2 && (
              <div className="w-1 aspect-square neon-bg rounded-full" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
