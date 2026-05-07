import React from "react";
import {
  Clock,
  ShieldCheck,
  Wrench,
  BadgeCheck,
  DollarSign,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Same-Day Repairs",
    description:
      "Fast and reliable same-day repair services to get your appliances running again quickly.",
  },
  {
    icon: Wrench,
    title: "Certified Technicians",
    description:
      "Experienced technicians trained to repair all major appliance brands professionally.",
  },
  {
    icon: ShieldCheck,
    title: "6-Month Guarantee",
    description:
      "We back our repairs with a service guarantee for your peace of mind.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden costs or surprise charges.",
  },
  {
    icon: Truck,
    title: "Home Service",
    description:
      "We come directly to your location for convenient appliance repairs.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted By Customers",
    description:
      "Known for reliable service, quality repairs, and customer satisfaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-red-950"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-red-400 uppercase tracking-[4px] font-semibold mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Trusted Appliance Repair Experts
          </h2>

        </div>

        {/* FEATURE GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-red-400 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-row gap-6">
                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center mb-6 shadow-lg">

                  <Icon
                    size={30}
                    className="text-white"
                  />
                </div>
                <div>
                                  {/* TITLE */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                </div>
                </div>



                {/* DESCRIPTION */}
                <p className="text-gray-300 leading-relaxed">
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