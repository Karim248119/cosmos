import React from "react";
import ShipCanvas from "@/components/canvas/Ship";
import Nav from "@/components/Nav";
import Icon from "@/components/Icon";
import { IoPlanet } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { BiSolidLeaf } from "react-icons/bi";
import StarsCanvas from "@/components/canvas/Stars";
import Section from "@/components/Section";
import { FaReact } from "react-icons/fa6";
export default function HomePage() {
  return (
    <Section className="flex-1 flex h-screen w-full relative  bg-black">
      <video
        className="w-screen h-screen object-cover absolute top-0 left-0"
        src="/assets/theme/black-hole.mp4"
        loop
        autoPlay
        muted
      />
      <Nav />

      <div className="md:w-2/3 w-full h-screen cursor-grab">
        <ShipCanvas envSrc="./assets/theme/black-hole.jpg" />
      </div>
      <div className="h-screen  flex flex-col justify-center items-end absolute md:pt-20 pt-10 md:right-20 right-5 ">
        <div className=" flex flex-col justify-end">
          <span className="font-share-tech-mono text-end md:text-base text-xs">
            A Spacetime Odyssey
          </span>
          <h2 className="md:text-8xl text-5xl font-bold font-sans -mr-3">
            COSMOS
          </h2>
        </div>
        <div className="flex items-center mt-5 ">
          <Icon Name={FaReact} />
          <div className="h-[1px] md:w-20 w-16 neon-bg bg-white" />
          <Icon Name={GiSandsOfTime} />
          <div className="h-[1px] md:w-20 w-16 neon-bg bg-white" />
          <Icon Name={BiSolidLeaf} />
        </div>
        <div className=" flex flex-col gap-5 font-share-tech-mono text-end mt-16 md:text-base text-sm">
          <p>Join us into our ship of imagination</p>
          <p>
            to discover the laws of nature and our coordinates in space and time
          </p>
        </div>
      </div>
    </Section>
  );
}
