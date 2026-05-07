import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://joburgappliancerepair.co.za/wp-content/uploads/2025/05/appliance-repair-1024x683.jpg",
  "https://appliancerepairtechnologies.co.za/wp-content/uploads/2021/03/What-to-expect-for-your-appliance-repair-appointment.jpg",
  "https://appliancepros.co.za/wp-content/uploads/2022/12/washing-machine-repair.jpg",
  "https://www.smartappliance.co.za/wp-content/uploads/elementor/thumbs/appliance-repair-la-lucia-fridge-and-more--jpg-qlhok7b8v16m099pp79xqq1s9ydytqybhjuwihy3nk.webp",
  "https://bertelsmidrand.co.za/wp-content/uploads/2024/01/20240123_153828-1024x768.jpg",
  "https://i0.wp.com/applianceman.co.za/wp-content/uploads/2025/12/Appliance-Man-12.jpg?resize=1024%2C683&ssl=1",
];

export default function Gallery() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-red-950"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER */}
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

        {/* GALLERY CONTAINER */}
        <div className="relative max-w-6xl mx-auto">

          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
            bg-white/10 backdrop-blur-md border border-white/10
            hover:bg-red-500/80 transition p-3 rounded-full"
          >
            <ChevronLeft className="text-white" />
          </button>

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-2"
          >

            {images.map((img, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[300px] md:w-[360px] h-[360px]
                rounded-3xl overflow-hidden group shadow-2xl
                border border-white/10"
              >

                <img
                  src={img}
                  alt="appliance repair work"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">

                  <span className="text-white font-semibold text-lg">
                    View Work
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
            bg-white/10 backdrop-blur-md border border-white/10
            hover:bg-blue-500/80 transition p-3 rounded-full"
          >
            <ChevronRight className="text-white" />
          </button>

        </div>
      </div>
    </section>
  );
}