import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import LogoMarquee from "../components/LogoMarquee";
import Button from "../style/Button";
import Bess from "../assets/images/cat-chair.png";
import light from "../assets/images/cat-lighting.png";
import Almari from "../assets/images/Almari.webp";
import IdealInstitute from "../assets/images/cat-cabinet.png";


const ProductListing = () => {
  // fetch products

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
  ];

  return (
    <div className="">
      <div className="primary-container">
        {/* Breadcrumb */}
        <Breadcrumb />

        <span className="heading-sm text-[#838383]">Feature</span>
        <h2 className="heading-md pb-10">Latest products</h2>

        {/* products grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products?.map((product) => (
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
          ))}
        </div>

        {/* Load More Button */}
        <div className="w-full m-auto flex justify-center items-center my-15">
          <button className="w-[214px] h-[53px] text-sm cursor-pointer border border-gray-400 hover:bg-gray-200 rounded-sm ">
            Load More
          </button>
        </div>
      </div>
      {/* marcue */}
      <LogoMarquee />
    </div>
  );
};

export default ProductListing;
