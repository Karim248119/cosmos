import React from "react";

export default function Icon({
  Name,
  className,
  onClick,
}: {
  Name: any;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`md:p-3 p-2 rounded-full border-2 border-white text-white md:text-lg text-xs neon-hover hover:text-black ${className}`}
    >
      <Name />
    </button>
  );
}
