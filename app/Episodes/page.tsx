"use client";
import StarsCanvas from "@/components/canvas/Stars";
import Nav from "@/components/Nav";
import React, { useEffect, useRef, useState } from "react";
import { cosmosEpisodes } from ".";
import ShipCanvas from "@/components/canvas/Ship";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Icon from "@/components/Icon";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
import { SiRottentomatoes } from "react-icons/si";
import { IoRocket } from "react-icons/io5";
import { GiEagleEmblem } from "react-icons/gi";
import { FaImdb } from "react-icons/fa";
import { PiClockFill } from "react-icons/pi";
import Button from "@/components/Button";
import { FaHeart, FaPlay } from "react-icons/fa6";
import { BiPlay } from "react-icons/bi";
import Section from "@/components/Section";

export default function EpisodesPage() {
  const [fav, setFav] = useState(true);
  const swiperRef = useRef<any>(null);
  const [activeTab, setActiveTab] = useState(cosmosEpisodes[0].id);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSlidesPerView(window.innerWidth > 400 ? 3 : 1);
    }
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const slideIndex = cosmosEpisodes.findIndex(
      (episode) => episode.id === tabId
    );
    swiperRef.current?.slideTo(slideIndex);
  };

  return (
    <Section className="bg-black h-screen ">
      <img
        className="w-screen h-screen object-cover absolute top-0 left-0"
        src="/assets/theme/solar.jpg"
      />
      <Nav />
      <StarsCanvas />
      <div className="md:w-2/3 w-full h-screen fixed top-0 left-0 cursor-grab">
        <ShipCanvas envSrc="./assets/theme/solar3.jpg" />
      </div>
      <Tabs
        className="h-screen flex flex-col justify-center items-end absolute pt-20 md:right-20 right-5 md:w-[45vw] w-[80vw]"
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={slidesPerView}
          scrollbar
          centeredSlides={true}
          className="w-full"
          initialSlide={0}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) =>
            setActiveTab(cosmosEpisodes[swiper.activeIndex].id)
          }
        >
          {cosmosEpisodes.map((episode) => (
            <SwiperSlide key={episode.id}>
              <img
                src={episode.poster}
                alt={episode.name}
                className={`w-64 h-52 object-cover ${
                  activeTab === episode.id && "border-2 border-white"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 w-full">
          {cosmosEpisodes.map((episode) => (
            <TabsContent key={episode.id} value={episode.id}>
              <div className="flex flex-row-reverse items-center">
                <div className="text-xl">{episode.id}</div>
                <div className="h-[1px] flex-1 mx-2 bg-white" />
                <div className="flex items-center gap-3">
                  <Icon
                    Name={ImArrowLeft}
                    onClick={() => swiperRef.current?.slidePrev()}
                  />
                  <Icon
                    Name={ImArrowRight}
                    onClick={() => swiperRef.current?.slideNext()}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 items-end text-end">
                <h2 className="md:text-3xl text-lg font-mono font-extrabold h-14 flex items-center">
                  {episode.name}
                </h2>
                <div className="flex items-center md:gap-3 gap-1 md:text-xs text-[8px]">
                  <div className="flex items-center justify-center gap-2 border border-white rounded-full md:px-3 px-2 py-1 ">
                    <FaImdb />
                    <p>{episode.IMDBrate}</p>
                  </div>
                  <div className="flex items-center gap-2 border border-white rounded-full md:px-3 px-2 py-1 ">
                    <SiRottentomatoes />
                    <p>{episode.rottenTomatoesRate}</p>
                  </div>
                  <div className="flex items-center gap-2 border border-white rounded-full md:px-3 px-2 py-1 ">
                    <PiClockFill />
                    <p>{episode.duration}</p>
                  </div>
                  <div className="flex items-center gap-3"></div>
                </div>
                <p className="h-10 md:text-base text-[9px]">
                  {episode.description}
                </p>
                <div className=" flex items-center gap-4">
                  <Link
                    href={{
                      pathname: "/Episodes/episode",
                      query: { episode: episode.watchdocumentaries },
                    }}
                  >
                    <Button
                      title="WATCH NOW"
                      className="md:w-[20vw] w-[50vw]"
                      icon={<FaPlay className="group-hover:text-black z-30 " />}
                    />
                  </Link>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </Section>
  );
}
