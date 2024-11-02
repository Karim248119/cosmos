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
    <div className=" h-[15vh]  w-screen flex justify-between items-center px-20  absolute top-0 left-0 z-20 ">
      <GiRingedPlanet size={40} />

      <div className="flex justify-center items-center gap-8 text-sm font-share-tech-mono">
        {navlist.map((item) => (
          <React.Fragment key={item.id}>
            <Link
              href={item.link}
              className={`neon-text-hover ${
                path === item.link ? "neon-text" : ""
              }`}
            >
              {item.name}
            </Link>
            {/* <span className="text-3xl -mt-4 text-primary">.</span> */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
