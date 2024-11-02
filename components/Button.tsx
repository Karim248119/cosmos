import React from "react";

export default function Button({
  title,
  className,
  onClick,
  icon,
}: {
  title: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={` relative flex items-center justify-center gap-1 h-12 border border-white group overflow-hidden neon-btn-hover hover:text-black text-xl duration-700 ease-in-out transition-all font-share-tech-mono ${className}`}
    >
      <span className="z-20 text-lg">{title}</span>
      <div className="w-full h-full absolute -left-full group-hover:left-0 top-0 z-10 duration-300 bg-white" />
      {icon}
    </button>
  );
}
