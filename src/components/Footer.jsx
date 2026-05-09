import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f9f9f9]">
      {/* Main Footer */}
      <div className="primary-container pt-12 px-5 lg:px-0">
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-12 lg:gap-20">
          {/* Logo + Description */}
          <div className="flex flex-col w-full md:w-auto max-w-[250px]">
            <img
              src="/assets/logo.png"
              alt="Salt The Prop Store"
              className="w-[180px] h-auto object-contain mb-6"
            />

            <p className="text-[16px] leading-[26px] text-[#7a7a7a]">
              We take pride in providing you with top-notch, affordable
              furniture that turns your house into a home.
            </p>
          </div>

          {/* Products */}
          <nav aria-label="Products" className="min-w-[150px]">
            <h2 className="text-[18px] font-semibold text-[#1b1b1b] mb-6">
              Products
            </h2>

            <ul className="space-y-4">
              {[
                "Desk",
                "Chairs",
                "Sofa and Couches",
                "Storage",
                "Tables",
                "Office Tables",
                "Lighting",
                "Meeting Tables",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[16px] font-medium text-[#1f1f1f] hover:text-black transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu */}
          <nav aria-label="Menu" className="min-w-[130px]">
            <h2 className="text-[18px] font-semibold text-[#1b1b1b] mb-6">
              Menu
            </h2>

            <ul className="space-y-4">
              {["About Us", "Blog", "Contact Us", "Resources"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[16px] font-medium text-[#1f1f1f] hover:text-black transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="w-full md:w-auto max-w-[350px]">
            <h2 className="text-[18px] font-semibold text-[#1b1b1b] mb-6">
              Contact Us
            </h2>

            <div className="space-y-7">
              {/* Address */}
              <div>
                <h3 className="text-[16px] font-semibold text-[#1f1f1f] mb-2">
                  Registered Office Address
                </h3>

                <p className="text-[16px] leading-[32px] text-[#7a7a7a]">
                  29, 1st Floor, Sonawala Building, Horniman Circle, G Vaidya
                  Rd, Fort, Mumbai, Maharashtra 400023, India
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-[16px] font-semibold text-[#1f1f1f] mb-2">
                  Mobile No.
                </h3>

                <a
                  href="tel:4155550132"
                  className="text-[16px] text-[#7a7a7a] hover:text-black transition"
                >
                  415-555-0132
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-[16px] font-semibold text-[#1f1f1f] mb-2">
                  Email Address
                </h3>

                <a
                  href="mailto:Salt@gmail.com"
                  className="text-[16px] text-[#7a7a7a] hover:text-black transition break-all"
                >
                  Salt@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col">
            <h2 className="text-[18px] font-semibold text-[#1b1b1b] mb-6">
              Follow Us
            </h2>

            <div className="flex items-center gap-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#111111] hover:scale-110 transition-transform duration-200"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="text-[#111111] hover:scale-110 transition-transform duration-200"
              >
                <FaTwitter size={24} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="text-[#111111] hover:scale-110 transition-transform duration-200"
              >
                <FaFacebookF size={22} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="text-[#111111] hover:scale-110 transition-transform duration-200"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 md:mt-5 flex flex-col md:flex-row items-center justify-between gap-4 py-8">
          <p className="text-[16px] text-[#222222] text-center md:text-left">
            Copyright © CozyCorner. All Rights Reserved
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <a
              href="#"
              className="text-[15px] text-[#222222] hover:text-black transition"
            >
              Terms of Use
            </a>

            <a
              href="#"
              className="text-[15px] text-[#222222] hover:text-black transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[15px] text-[#222222] hover:text-black transition"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
