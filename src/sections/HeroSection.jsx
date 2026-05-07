import React from "react";
import heroImg from "../images/main-img.jpg"

function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden mt-14"
    >

      {/* BACKGROUND IMAGE */}
      <img
        src={heroImg}
        alt="Appliance repair service"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/70 to-red-900/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 ">

        <div className="max-w-3xl backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">

          {/* SMALL TOP TEXT */}
          

          {/* MAIN HEADING */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Keith and Kevin
            <span className="text-red-400"> Appliance </span>
            Repair Services
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Professional repair services for refrigerators, washing machines,
            microwaves, stoves, and more. Fast response, affordable pricing,
            and trusted workmanship across your area.
          </p>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-300">

            <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20">
              ✅ Same-Day Service
            </div>

            <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20">
              🔧 Certified Technicians
            </div>

            <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20">
              ⭐ Trusted Local Experts
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            {/* PRIMARY BUTTON */}
            <button
              onClick={scrollToContact}
              className="bg-red-500 hover:bg-red-600 transition duration-300 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105"
            >
              Book a Repair
            </button>

            {/* SECONDARY BUTTON */}
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105"
            >
              WhatsApp Us
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;