import React, { useState } from "react";
import burgerMenu from "../images/burger-bar.png";
import closeButton from "../images/close.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="fixed top-0 z-50 hidden md:flex items-center justify-between w-full px-8 py-4 bg-gradient-to-r from-blue-950 via-blue-900 to-red-700 text-white shadow-lg">

        {/* LOGO */}
        <div className="text-3xl font-extrabold tracking-wide">
          <span className="text-red-400">Keith <span className="text-white">and</span> Kevin</span>{" "}
          <span className="text-white">Appliance Repair</span>
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-8 text-lg font-medium items-center">
          <a
            href="#home"
            className="hover:text-red-300 transition duration-200"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-red-300 transition duration-200"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-red-300 transition duration-200"
          >
            Services
          </a>

          <a
            href="#contact"
            className="hover:text-red-300 transition duration-200"
          >
            Contact
          </a>

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <div className="fixed top-0 z-50 flex md:hidden items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-blue-950 to-red-700 text-white shadow-lg">

        {/* LEFT SIDE */}
        <div className="flex items-center">
          <img
            src={burgerMenu}
            alt="burger menu"
            className="w-9 mr-3 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />

          <div className="text-xl font-bold tracking-wide">
            <span className="text-red-400">K & K</span> Repair
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-blue-950 to-red-700 text-white p-5 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* CLOSE BUTTON */}
        <div className="flex items-center mb-10">
          <img
            onClick={() => setIsOpen(false)}
            src={closeButton}
            alt="close button"
            className="w-7 h-7 cursor-pointer"
          />
        </div>

        {/* MENU LINKS */}
        <div className="flex flex-col gap-8 text-xl font-medium">

          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-300 transition"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-300 transition"
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-300 transition"
          >
            Services
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-300 transition"
          >
            Contact
          </a>

          {/* MOBILE CTA */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-red-500 hover:bg-red-600 text-center py-3 rounded-lg font-semibold transition"
          >
            Book a Repair
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;