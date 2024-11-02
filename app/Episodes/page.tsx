"use client";
import StarsCanvas from "@/components/canvas/Stars";
import Nav from "@/components/Nav";
import React, { useRef, useState } from "react";
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

export default function EpisodesPage() {
  const swiperRef = useRef<any>(null);
  const [activeTab, setActiveTab] = useState(cosmosEpisodes[0].id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const slideIndex = cosmosEpisodes.findIndex(
      (episode) => episode.id === tabId
    );
    swiperRef.current?.slideTo(slideIndex);
  };

  return (
    <div className="bg-black h-screen ">
      <video
        className="w-screen h-screen object-cover absolute top-0 left-0"
        src="/assets/theme/sea.mp4"
        loop
        autoPlay
        onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 5)}
      />
      <Nav />
      <StarsCanvas />
      <div className="w-2/3 h-screen fixed top-0 left-0">
        <ShipCanvas envSrc="./assets/theme/sea.jpg" />
      </div>
      <Tabs
        className="h-screen flex flex-col justify-center items-end absolute pt-20 right-20 w-[45vw]"
        value={activeTab}
        onValueChange={handleTabChange}
      >
        {/* Render the Swiper without wrapping img directly in TabsTrigger */}
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
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

        <div className="mt-5 w-full">
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
                <h2 className="text-3xl font-mono font-extrabold">
                  {episode.name}
                </h2>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-2 border border-white rounded-full px-3 py-1">
                    <FaImdb />
                    <p>{episode.IMDBrate}</p>
                  </div>
                  <div className="flex items-center gap-2 border border-white rounded-full px-3 py-1">
                    <SiRottentomatoes />
                    <p>{episode.rottenTomatoesRate}</p>
                  </div>
                  <div className="flex items-center gap-2 border border-white rounded-full px-3 py-1">
                    <PiClockFill />
                    <p>{episode.duration}</p>
                  </div>
                  <div className="flex items-center gap-3"></div>
                </div>
                <p className="h-10">{episode.description}</p>
                <div className=" flex items-center gap-4">
                  <Link href={episode.ihavenotv}>
                    <Icon Name={IoRocket} />
                  </Link>
                  <Link href={episode.watchdocumentaries}>
                    <Icon Name={GiEagleEmblem} />
                  </Link>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
