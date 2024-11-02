"use client";
import Button from "@/components/Button";
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
      <img
        className="w-screen h-[110vh] object-cover absolute -top-10 left-0"
        src="/assets/theme/earth.jpg"
      />
      <Nav />
      <StarsCanvas />
      <div className="w-2/3 h-screen bg-cover cursor-grab">
        <ShipCanvas envSrc="./assets/theme/earth2.jpg" />
      </div>
      <div className="h-screen  flex flex-row-reverse gap-10 justify-center items-center  absolute pt-20 right-20">
        <div className="flex flex-col gap-10">
          <Icon Name={FaFacebookF} />
          <Icon Name={FaLinkedinIn} />
          <Icon Name={FaXTwitter} />
        </div>
        <form className="w-[30vw] text-sm h-[60vh] relative overflow-hidden flex flex-col gap-10 rounded-bl-2xl rounded-tr-2xl justify-center items-center border font-share-tech-mono">
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
          <Button title="SEND MESSAGE" className="w-[80%]" />
        </form>
      </div>
    </div>
  );
}
