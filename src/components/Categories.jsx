import React from "react";

import {
  PiLampPendantFill,
  PiOfficeChairFill,
  PiDeskFill,
  PiHandbagFill,
} from "react-icons/pi";

import { GiRoundTable } from "react-icons/gi";

const categories = [
  {
    id: 1,
    title: "Travel Bags",
    icon: <PiHandbagFill />,
  },
  {
    id: 2,
    title: "Chairs",
    icon: <PiOfficeChairFill />,
  },
  {
    id: 3,
    title: "Desk",
    icon: <PiDeskFill />,
  },
  {
    id: 4,
    title: "Tables",
    icon: <GiRoundTable />,
  },
  {
    id: 5,
    title: "Lamp",
    icon: <PiLampPendantFill />,
  },
  {
    id: 6,
    title: "Office Furniture",
    icon: <PiOfficeChairFill />,
  },
  {
    id: 7,
    title: "Travel Bags",
    icon: <PiHandbagFill />,
  },
  {
    id: 8,
    title: "Chairs",
    icon: <PiOfficeChairFill />,
  },
  {
    id: 9,
    title: "Desk",
    icon: <PiDeskFill />,
  },
];

const Categories = () => {
  return (
    <section className="py-5 bg-[#f7f7f7]">
      <div className="primary-container">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">
          <p className="text-[#838383] heading-sm mb-2">Categories</p>

          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Browse By Top Category
          </h2>
        </div>

        {/* ================= CATEGORY PILLS ================= */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-[950px] mx-auto">
          {categories.map((item) => (
            <button
              key={item.id}
              className="
                flex items-center gap-3
                px-6 py-4
                rounded-full
                border border-black/10
                bg-white
                transition-all duration-300
                hover:bg-black
                hover:text-white
                hover:-translate-y-1
              "
            >
              {/* Icon */}
              <span className="text-xl shrink-0">{item.icon}</span>

              {/* Text */}
              <span className="text-sm font-medium whitespace-nowrap">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
