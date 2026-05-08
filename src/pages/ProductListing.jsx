import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import LogoMarquee from "../components/LogoMarquee";
import Button from "../style/Button";

const ProductListing = () => {
  // fetch products

  const products = [
    {
      id: 1,
      brand: "SlumberCraft",
      title: "Bess Decorative Throw Pillow",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      id: 2,
      brand: "BroyHill",
      title: "Arlomore Table Lamp",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
    },
    {
      id: 3,
      brand: "ApparelArk",
      title: "Calligaris Lazy Armchair",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      id: 4,
      brand: "IdealInstitute",
      title: "Mobican Sapporo 2-Drawer",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    },
    {
      id: 5,
      brand: "LuxuryHome",
      title: "Modern Interior Chair",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      id: 1,
      brand: "SlumberCraft",
      title: "Bess Decorative Throw Pillow",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      id: 2,
      brand: "BroyHill",
      title: "Arlomore Table Lamp",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
    },
    {
      id: 3,
      brand: "ApparelArk",
      title: "Calligaris Lazy Armchair",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      id: 4,
      brand: "IdealInstitute",
      title: "Mobican Sapporo 2-Drawer",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    },
    {
      id: 5,
      brand: "LuxuryHome",
      title: "Modern Interior Chair",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
  ];

  return (
    <section>
      <div className="primary-container">
        {/* Breadcrumb */}
        <Breadcrumb />

        <span className="heading-sm text-[#838383]">Feature</span>
        <h2 className="heading-md pb-10">Latest products</h2>

        {/* products grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products?.map((product) => (
            <div
              key={product.id}
              className="group relative p-4 rounded shadow hover:shadow-lg transition w-[270px] h-[334px] "
            >
              {/* Hover Button */}
              <div className="absolute bottom-20 left-15 opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <Button text="Enquire" className="scale-[0.80]" />
              </div>

              <img
                src={product.image}
                alt={product.title}
                className="object-cover mb-9 w-[217px] h-[217px]"
              />

              <p className="text-sm text-gray-600">{product.brand}</p>
              <h3 className="text-md font-semibold mb-2">{product.title}</h3>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="w-full m-auto flex justify-center items-center py-8">
          <button className="w-[214px] h-[53px] cursor-pointer border border-gray-400 hover:bg-gray-200 ">
            Load More
          </button>
        </div>
      </div>
      {/* marcue */}
      <LogoMarquee />
    </section>
  );
};

export default ProductListing;
