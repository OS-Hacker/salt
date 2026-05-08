import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { MdEmail, MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.jpeg'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-[var(--primary-color)]/95 backdrop-blur-md text-white">

      <div className="primary-container">

        {/* ================= TOP BAR ================= */}
        <div className="hidden lg:flex items-center justify-between py-3  border-white/10">

          <p className="text-sm">
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
          </p>

          <div className="flex items-center text-sm">

            <div className="flex items-center gap-2">
              <MdEmail className="w-6 h-6" />
              <span>saltprops@gmail.com</span>
            </div>

            <span className="w-px h-5 bg-white mx-5"></span>

            <div className="flex items-center gap-2">
              <MdCall className="w-6 h-6" />
              <span>9876543210 / 9876543210</span>
            </div>

          </div>
        </div>

        {/* ================= MAIN NAV ================= */}
        <nav className="h-20 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-10">

            {/* Logo */}
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="w-35 h-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 font-medium">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/rent">Rent</Link></li>
              <li><Link to="/category">Category</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              {/* <li><Link to="/products">products</Link></li> */}

            </ul>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="hidden md:flex items-center bg-white rounded-full px-4 h-11.5 w-65">

              <input
                type="text"
                placeholder="Search for products, categories..."
                className="w-full bg-transparent outline-none text-black placeholder:text-sm"
              />

              <BiSearch className="w-5 h-5 text-black" />
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/20"
            >
              {
                mobileMenu
                  ? <HiX className="w-6 h-6" />
                  : <HiOutlineMenuAlt3 className="w-6 h-6" />
              }
            </button>

          </div>
        </nav>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[var(--primary-color)] overflow-hidden transition-all duration-300 z-50 ${
          mobileMenu
            ? "max-h-100 border-t border-white/10"
            : "max-h-0"
        }`}
      >

        <div className="primary-container py-6">

          <ul className="flex flex-col gap-6 text-lg font-medium">

            <li>
              <Link to="/" onClick={() => setMobileMenu(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/rent" onClick={() => setMobileMenu(false)}>
                Rent
              </Link>
            </li>

            <li>
              <Link to="/category" onClick={() => setMobileMenu(false)}>
                Category
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMobileMenu(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/resources" onClick={() => setMobileMenu(false)}>
                Resources
              </Link>
            </li>

          </ul>

        </div>
      </div>

    </header>
  );
};

export default Navbar;