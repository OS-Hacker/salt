import React from "react";
import bannerImg from "../assets/images/slide2-demo6.jpg"

const Banner = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[600px] overflow-hidden">

      {/* Image */}
      <img
        src={bannerImg}
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div className="primary-container text-white">

          <div className="max-w-[604px] mx-auto text-center">

            <h4 className="heading-md mb-4">
              A Stylish Studio in Indiranagarl
            </h4>

            <p className="text-white/80 heading-sm">
              Ideal for podcasts, reels, and brand films
            </p>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Banner;