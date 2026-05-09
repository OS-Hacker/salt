import React from "react";
import Button from "../style/Button";
import banner_2 from "../assets/images/default-banner-11.jpg"
import banner_1 from "../assets/images/default-banner-12.jpg"

const HeroSection = () => {
  return (
    <section className="mt-10">
      <div className="primary-container">
        {/* Grid */}
        <div className="flex justify-center gap-6 items-center ">
          {/* ================= LEFT CARD ================= */}
          <div className="relative overflow-hidden rounded-[15px] w-[920px] h-[411px] group">
            {/* Image */}
            <img
              src={banner_1}
              alt="Furniture"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />


            {/* Content */}
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-center">
              <div className="max-w-[347px]">
                <h2 className="text-white text-1xl sm:text-3xl font-bold leading-tight mb-4">
                  Where Quality Meets Style, Furniture That Lasts
                </h2>

                <Button text="Enquire" className="scale-[0.9] origin-left" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="relative overflow-hidden w-[470px] h-[411px] rounded-[15px]  group">
            {/* Image */}
            <img
              src={banner_2}
              alt="Bathroom"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <div className="max-w-[220px]">
                <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-6">
                  Details are important
                </h2>

                <Button text="Enquire" className="scale-[0.8] origin-left" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
