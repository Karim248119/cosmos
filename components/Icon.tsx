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
      className={`p-3 rounded-full border-2 border-white text-white text-lg neon-hover hover:text-black ${className}`}
    >
      <Name />
    </button>
  );
}
