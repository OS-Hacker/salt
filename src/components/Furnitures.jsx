import React from 'react'
import showcase from '../assets/images/showcase.jpg'

const Furnitures = () => {
  return (
    <section className="w-full">
      <div className="primary-container">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-15">
          Why our furnitures are <br /> something more?
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* Left Content */}
          {/* w-[560px] h-[217px] */}
          <div className="flex-1">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              we believe that furniture is more than just items that fill a
              space—it's a reflection of who you are, your personality, and your
              lifestyle.
            </p>
            <p className="text-md text-gray-400 mb-6">
              We take pride in providing you with top-notch, affordable
              furniture that turns your house into a home. Whether you're
              furnishing your living room, bedroom, or workspace, we've got the
              perfect pieces to create a cozy, comfortable, and stylish
              environment.
            </p>
            <a
              href="#"
              className="text-md font-semibold text-gray-900  underline-offset-4"
            >
              Read More
            </a>
          </div>

          {/* Right Image */}
          {/* w-[600px] h-[265px] */}
          <div className="flex-1">
            <img
              src={showcase}
              alt="Furniture showcase"
              className="w-full h-[265px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Furnitures