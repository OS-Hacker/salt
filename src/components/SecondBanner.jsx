import React from "react";
import secondBanner_img  from "../assets/images/rounded-banner-7.jpg"

const SecondBanner = () => {
  return (
    <section className="py-10">

      <div className="primary-container">

        {/* ================= BANNER ================= */}
        <div className="relative overflow-hidden rounded-[36px] h-[320px] sm:h-[400px] lg:h-[460px] group">

          {/* Background Image */}
          <img
            src={secondBanner_img}
            alt="Luxury Interior"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">

            <div className="w-full px-6 sm:px-10 lg:px-14">

              <div className="w-[501px] h-[197px] text-white">

                {/* Heading */}
                <h2 className="text-[25px] font-bold leading-tight mb-2">

                  Transform Your Home: Scandinavian Style Ideas with a Luxury Touch

                </h2>

                {/* Description */}
                <p className="text-[15px] text-white/80 leading-relaxed mb-6">
                  Choosing the right sofa is a crucial decision when furnishing <br />
                  your living space. It’s not just about finding a piece that
                  <br />looks great!

                </p>

                {/* Button */}
                <a
                  href="/"
                  className="
                    inline-flex items-center
                    text-sm font-semibold
                    underline underline-offset-4
                    hover:text-white/70
                    transition-all duration-300
                  "
                >
                  Read More
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SecondBanner;