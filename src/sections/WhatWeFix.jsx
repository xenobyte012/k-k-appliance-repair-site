import React from "react";
import samsung from "../images/samsung-1.jpg";
import gaggenau from "../images/gaggenau-1.jpg";
import liebherr from "../images/liebherr-1.jpg";
import miele from "../images/miele-1.jpg";
import siemens from "../images/siemens-1.jpg";
import smeg from "../images/smeg-1.jpg";
import speedqueen from "../images/speed-queen-1.jpg";
import whirlpool from "../images/whirlpool-1.jpg";

const brands = [
  samsung,
  gaggenau,
  liebherr,
  miele,
  siemens,
  smeg,
  speedqueen,
  whirlpool,
];

function WhatWeFix() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-red-950"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* Heading */}
        <div className="max-w-6xl mx-auto mb-16 text-center">

          <p className="text-red-400 uppercase tracking-[4px] font-semibold mb-4">
            Trusted Brands
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            We Repair All Major Appliance Brands
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Our experienced technicians repair and service a wide range of
            premium appliance brands for homes and businesses.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md h-24 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg hover:scale-105 transition duration-300 p-3"
            >
              <img
                src={brand}
                alt="brand logo"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeFix;