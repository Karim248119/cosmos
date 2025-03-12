"use client";
import Button from "@/components/Button";
import ShipCanvas from "@/components/canvas/Ship";
import StarsCanvas from "@/components/canvas/Stars";
import Icon from "@/components/Icon";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
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
    <Section className="flex-1 flex h-screen w-full relative">
      <img
        className="w-screen h-[110vh] object-cover absolute -top-10 left-0"
        src="/assets/theme/earth.jpg"
      />
      <Nav />
      <StarsCanvas />
      <div className="md:w-2/3 w-full h-screen bg-cover cursor-grab">
        <ShipCanvas envSrc="./assets/theme/earth2.jpg" />
      </div>
      <div className="h-screen  flex md:flex-row-reverse flex-col-reverse gap-10 justify-center items-center  absolute pt-20 md:right-20 right-1/2 translate-x-1/2 md:translate-x-0">
        <div className="flex md:flex-col md:gap-10 gap-2">
          <a href="https://www.linkedin.com/in/karim248/" target="_blank">
            <Icon Name={FaFacebookF} />
          </a>
          <a
            href="https://www.facebook.com/kareem.kemo.75098364?mibextid=ZbWKwL"
            target="_blank"
          >
            <Icon Name={FaLinkedinIn} />
          </a>
          <a href="https://x.com/Karim3oda" target="_blank">
            <Icon Name={FaXTwitter} />
          </a>
        </div>
        <form className="md:w-[30vw] w-[90vw] text-sm h-[60vh] relative overflow-hidden flex flex-col gap-10 rounded-bl-2xl rounded-tr-2xl justify-center items-center border font-share-tech-mono">
          <div className="border-b w-[80%] border-white flex justify-center items-center gap-3 md:px-5 px-2 py-1">
            <FaUserAstronaut className="text-xl" />
            <input
              placeholder="User Name"
              className="flex-1 md:px-5 px-2 bg-transparent focus:outline-none z-20 md:text-base text-xs"
            />
          </div>
          <div className="border-b w-[80%] border-white flex justify-center items-center gap-3 md:px-5 px-2 py-1">
            <RiMailSendLine className="text-xl" />
            <input
              placeholder="Email Adress"
              className="flex-1 md:px-5 px-2 bg-transparent focus:outline-none z-20 md:text-base text-xs"
            />
          </div>
          <div className="border-b w-[80%] border-white flex justify-center items-center gap-3 md:px-5 px-2 py-2 mb-10">
            <TbMessageBolt className="text-xl" />
            <input
              placeholder="Message"
              className="flex-1 md:px-5 px-2 bg-transparent focus:outline-none z-20 md:text-base text-xs"
            />
          </div>
          <Button title="SEND MESSAGE" className="w-[80%]" />
        </form>
      </div>
    </Section>
  );
}
