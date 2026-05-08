import React, { useRef } from "react";
import Bess from "../assets/images/cat-chair.png";
import light from "../assets/images/cat-lighting.png";
import Almari from "../assets/images/Almari.webp";
import IdealInstitute from "../assets/images/cat-cabinet.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";

// Icons

// Components
import Button from "../style/Button";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const products = [
  {
    id: 1,
    brand: "SlumberCraft",
    title: "Bess Decorative Throw Pillow",
    image: Bess,
  },
  {
    id: 2,
    brand: "BroyHill",
    title: "Arlomore Table Lamp",
    image: light,
  },
  {
    id: 3,
    brand: "ApparelArk",
    title: "Calligaris Lazy Armchair",
    image: Almari,
  },
  {
    id: 4,
    brand: "IdealInstitute",
    title: "Mobican Sapporo 2-Drawer",
    image: IdealInstitute,
  },
    {
    id: 2,
    brand: "BroyHill",
    title: "Arlomore Table Lamp",
    image: light,
  },

];

const FeatureSwipper = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-14 bg-[#f7f7f7] overflow-hidden">
      <div className="primary-container">
        .{/* ================= HEADER ================= */}
        <div className="flex items-center justify-between mb-5">
          <div className="">
            <span className="heading-sm text-[#838383]">Feature</span>
            <h2 className="heading-md">Latest products</h2>
          </div>
          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Prev */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
            >
              <BiChevronLeft className="w-5 h-5" />
            </button>

            {/* Next */}
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <BiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* ================= SLIDER ================= */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4.2,
            },
          }}
          className="!overflow-visible"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group w-67.5 h-83.5">
                {/* Image Card */}
                <div className="relative bg-[#fafafa] rounded-[10px] overflow-hidden p-6 h-69 w-67.5 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Button */}
                  <div className="absolute bottom-5 left-15 opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <Button text="Enquire" className="scale-[0.80]" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-5 w-62.5 h-10.75">
                  <p className="text-sm text-[#838383] mb-1">{product.brand}</p>

                  <h3 className="heading- font-semibold leading-snug">
                    {product.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeatureSwipper;
