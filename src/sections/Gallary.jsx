import React from "react";

import img_1 from "../assets/gallery/img-1.jpeg";
import img_2 from "../assets/gallery/img-2.jpeg";
import img_3 from "../assets/gallery/img-3.jpeg";
import img_4 from "../assets/gallery/img-4.jpeg";
import img_5 from "../assets/gallery/img-5.jpeg";
import img_6 from "../assets/gallery/img-6.jpeg";
import img_7 from "../assets/gallery/img-7.jpeg";
import img_8 from "../assets/gallery/img-8.jpeg";

const images = [
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7,
  img_8,
];


/* Auto-scroll keyframes — injected here so no extra CSS file is needed */
const marqueeStyles = `
  @keyframes gallery-marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .gallery-track {
    display: flex;
    gap: 2rem;
    width: max-content;
    animation: gallery-marquee 45s linear infinite;
  }
  .gallery-paused:hover .gallery-track {
    animation-play-state: paused;
  }
  @media (max-width: 768px) {
    .gallery-track { gap: 1rem; }
  }
`;

export default function Gallery() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* BACKGROUND — unchanged */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-red-950"></div>

      {/* GLOW EFFECTS — unchanged */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER — unchanged */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-red-400 uppercase tracking-[4px] font-semibold mb-4">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Our Recent Repair Work
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            A showcase of real appliance repair jobs completed by our
            professional technicians across different clients.
          </p>
        </div>

        {/* AUTO-SCROLLING GALLERY */}
        <div className="gallery-paused relative">
          {/* Edge fade — looks clean on both desktop & mobile */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 md:w-24 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 md:w-24 bg-gradient-to-l from-slate-900/80 to-transparent"></div>

          <div className="gallery-track">
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="relative flex-shrink-0
                w-[240px] h-[300px]
                sm:w-[300px] sm:h-[360px]
                md:w-[360px] md:h-[360px]
                rounded-3xl overflow-hidden group shadow-2xl
                border border-white/10"
              >
                <img
                  src={img}
                  alt="appliance repair work"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY — unchanged */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <span className="text-white font-semibold text-lg">
                    View Work
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{marqueeStyles}</style>
    </section>
  );
}