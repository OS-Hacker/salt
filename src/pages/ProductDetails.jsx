import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../style/Button";
import ProductDetailsTabs from "../components/ShippingContent";

const ProductDetailsSection = () => {
  const product = {
    id: 1,
    name: "Black Metal Cane Design Brown Leather Bar Stool",
    code: "FPGG09373171",
    description:
      "Elevate your seating with this Black Metal Cane Design Brown Leather Bar Stool. Featuring a sleek black metal frame, cane backrest, and rich brown leather seat, it blends vintage charm with modern elegance, perfect for kitchens, bars, or high counters.",
    room: "Living",
    period: "Modern",
    details: [
      "Material: Brown Leather, Metal Cane",
      "Frame: Black Metal",
      "Backrest: Cane Design",
      "Seat Height: 75cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <section className="w-full py-12">
      <div className="primary-container max-w-7xl mx-auto px-4">
        {/* Product Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Images Section */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  className={`w-[147px] h-[141px] object-cover rounded-sm border cursor-pointer transition duration-300 ${
                    mainImage === img
                      ? "border-3 border-cyan-400"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 w-full">
              <img
                src={mainImage}
                alt={product.name}
                className=" w-[395px] h-[448px] object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                {product.name}
              </h1>

              <p className="text-md text-gray-400 mb-5">{product.code}</p>

              <p className="text-gray-600 text-sm leading-7 mb-6">
                {product.description}
              </p>

              {/* Info */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div>
                  <p className="text-sm font-medium">Room : {product.room}</p>
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Period : {product.period}
                  </p>
                </div>
              </div>
              <div className="">
                <a className="text-sm font-medium flex justify-start mb-3 items-center">
                  <IoLocationOutline className="mr-3 text-xl" /> Find in store
                </a>
              </div>

              {/* Buttons */}
              <Button
                text="Enquire Now"
                className="scale-[0.95] text-sm mt-2"
                href="#"
              />
            </div>
          </div>
        </div>

        {/* details */}

        <ProductDetailsTabs/>
      </div>
    </section>
  );
};

export default ProductDetailsSection;
