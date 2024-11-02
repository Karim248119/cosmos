import React from "react";

export default function Icon({
  Name,
  onClick,
}: {
  Name: any;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="p-3 rounded-full border-2 border-white text-white text-lg neon-hover hover:text-black"
    >
      <Name />
    </button>
  );
}
