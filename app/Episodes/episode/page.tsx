"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const episode = searchParams.get("episode") || "";

  return (
    <iframe
      width="560"
      height="315"
      src={episode}
      allow="autoplay"
      className="h-screen w-screen"
    />
  );
}
