import React from "react";
import {
  Refrigerator,
  WashingMachine,
  Flame,
  Microwave,
  Snowflake,
  Coffee,
  Wind,
  Droplets,
  Flame,
} from "lucide-react";

const features = [
  {
    title: "Fridge Repair",
    icon: Refrigerator,
    description:
      "Professional fridge and freezer repair services for homes and businesses.",
  },
  {
    title: "Washing Machine Repair",
    icon: WashingMachine,
    description:
      "Fast repairs for all washing machine brands and models.",
  },
  {
    title: "Cold & Freezer Rooms",
    icon: Snowflake,
    description:
      "Expert maintenance and repair for cold rooms and freezer rooms.",
  },
  {
    title: "Gas Stove Repair",
    icon: Flame,
    description:
      "Safe and reliable gas stove and oven repair services.",
  },
  {
    title: "Microwave & Tumble Dryer",
    icon: Microwave,
    description:
      "Quick appliance repairs to keep your home running smoothly.",
  },
  {
    title: "Coffee Machines",
    icon: Coffee,
    description:
      "Professional servicing and repair for coffee machines.",
  },
  {
    title: "Air Conditioning",
    icon: Wind,
    description:
      "Stay cool with trusted air-conditioner repair and maintenance.",
  },
  {
    title: "Gas Geysers",
    icon: Droplets,
    description:
      "Reliable gas geyser repair and installation services.",
  },
  {
  title: "Fireplace Repair",
  icon: Flame,
  description:
    "Professional fireplace inspection, maintenance, and repair services for safe and efficient heating.",
},
];

function ServiceSection() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-red-900"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-red-400 uppercase tracking-[4px] font-semibold mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            All Types Of Appliance Repairs
          </h2>

  
        </div>

        {/* SERVICE CARDS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-red-400 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-row gap-4">
                                  {/* ICON */}
                <div className="w-18 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                  <Icon size={30} className="text-white" />
                </div>
                <div>
                {/* TITLE */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                </div>

                </div>


                {/* DESCRIPTION */}
                <p className="text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;