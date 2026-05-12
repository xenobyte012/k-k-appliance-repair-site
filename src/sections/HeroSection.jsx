import React from "react";
import {
  ShieldCheck,
  Wrench,
  Clock3,
} from "lucide-react";

import {
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import heroImg from "../images/main-img.jpg";

function HeroSection() {
  const phoneNumber = "27738715044";

  const message =
    "Hello, I am interested in your appliance repair services.";

  const encodedMessage = encodeURIComponent(message);

  const callNow = () => {
    window.location.href = `tel:+${phoneNumber}`;
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

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">

        <div className="max-w-3xl">

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">

            Keith & Kevin
            <span className="text-red-500"> Appliance </span>
            Repair Services

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Professional repair services for fridges, washing machines,
            microwaves, stoves, air-conditioners, and more. Fast response,
            affordable pricing, and trusted workmanship.
          </p>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-200">

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">

              <Clock3 size={18} className="text-red-400" />

              <span>Same-Day Service</span>

            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">

              <Wrench size={18} className="text-blue-400" />

              <span>Expert Technicians</span>

            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">

              <ShieldCheck size={18} className="text-green-400" />

              <span>Trusted Repairs</span>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            {/* CALL BUTTON */}
            <button
              onClick={callNow}
              className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition duration-300 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:scale-105 text-white"
            >

              <FaPhoneAlt className="text-2xl" />

              <span>Call Now</span>

            </button>

            {/* WHATSAPP BUTTON */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 transition duration-300 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:scale-105 text-white"
            >

              <FaWhatsapp className="text-4xl" />

              <span>WhatsApp Us</span>

            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;