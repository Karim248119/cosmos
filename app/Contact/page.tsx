"use client";
import ShipCanvas from "@/components/canvas/Ship";
import StarsCanvas from "@/components/canvas/Stars";
import Icon from "@/components/Icon";
import Nav from "@/components/Nav";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaUserAstronaut,
  FaXTwitter,
} from "react-icons/fa6";
import { RiMailSendLine } from "react-icons/ri";
import { TbMessageBolt } from "react-icons/tb";

export default function ContactPage() {
  return (
    <div className="flex-1 flex h-screen w-full relative">
      <video
        className="w-screen h-screen object-cover absolute top-0 left-0"
        src="/assets/theme/galaxy.mp4"
        loop
        autoPlay
        onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 2)}
      />
      <Nav />
      <StarsCanvas />
      <div className="w-2/3 h-screen cursor-grab">
        <ShipCanvas envSrc="./assets/theme/galaxy.jpg" />
      </div>
      <div className="h-screen  flex flex-row-reverse gap-10 justify-center items-center  absolute pt-20 right-20">
        <div className="flex flex-col gap-10">
          <Icon Name={FaFacebookF} />
          <Icon Name={FaLinkedinIn} />
          <Icon Name={FaXTwitter} />
        </div>
        <form className="w-[30vw]  h-[60vh] relative overflow-hidden flex flex-col gap-10 rounded-bl-2xl rounded-tr-2xl justify-center items-center border font-share-tech-mono">
          {/* <div className="w-full h-full absolute top-0 left-0 bg-white/20 blur-sm z-0" /> */}
          <div className="border-b w-[80%] border-white flex justify-center items-center gap-3 px-5 py-1">
            <FaUserAstronaut className="text-xl" />
            <input
              placeholder="User Name"
              className="flex-1 px-5 bg-transparent focus:outline-none z-20"
            />
          </div>
          <div className="border-b w-[80%] border-white flex justify-center items-center gap-3 px-5 py-1">
            <RiMailSendLine className="text-xl" />
            <input
              placeholder="Email Adress"
              className="flex-1 px-5 bg-transparent focus:outline-none z-20"
            />
          </div>
          <div className="border-b w-[80%] border-white flex justify-center items-center gap-3 px-5 py-2 mb-10">
            <TbMessageBolt className="text-xl" />
            <input
              placeholder="Message"
              className="flex-1 px-5 bg-transparent focus:outline-none z-20"
            />
          </div>
          <button className="w-[80%] relative h-12 border border-white group overflow-hidden neon-btn-hover hover:text-black text-xl duration-700 ease-in-out transition-all ">
            <span className="z-20 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              SEND MESSAGE
            </span>
            <div className="w-full h-full absolute -left-full group-hover:left-0 top-0 z-10 duration-300 bg-white" />
          </button>
        </form>
      </div>
    </div>
  );
}
