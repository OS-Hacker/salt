import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({
  text = "Enquire",
  href = "#",
  className = "w-23.25 h-7.75",
}) => {
  return (
    <a
      href={href}
      className={`
        inline-flex items-center gap-3
        bg-black text-white
        rounded-full
        pl-1 pr-4 py-1
        transition-all duration-300
        hover:scale-[1.0]
        hover:opacity-90
        ${className}
      `}
    >
      {/* Circle Icon */}
      <span
        className="
          w-8 h-8
          rounded-full
          bg-white
          flex items-center justify-center
          shrink-0
        "
      >
        <BsArrowRight className="w-4 h-4 text-black" />
      </span>

      {/* Text */}
      <span className="text-md font-medium tracking-tight">
        {text}
      </span>
    </a>
  );
};

export default Button;