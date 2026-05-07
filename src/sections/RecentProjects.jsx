import React from "react";
import project1 from "../images/project-1.jpg";

function RecentProjects() {
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
        <div className="max-w-4xl mx-auto text-center mb-16">

          <p className="text-red-400 uppercase tracking-[4px] font-semibold mb-4">
            Recent Projects
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Our Recent Repair Work
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Take a look at some of the appliance repair and maintenance work
            completed by Keith-Kevin Appliance Repair for our valued customers.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {/* CARD 1 */}
          <div className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300">

            <img
              loading="lazy"
              src={project1}
              alt="Fridge repair project"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-white mb-3">
                Fridge Repair
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Professional fridge repair and maintenance service completed for
                a residential customer.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300">

            <img
              loading="lazy"
              src={project1}
              alt="Washing machine repair"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-white mb-3">
                Washing Machine Repair
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Fast and reliable washing machine repair completed with quality
                replacement parts.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300">

            <img
              loading="lazy"
              src={project1}
              alt="Air conditioner repair"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-white mb-3">
                Air Conditioner Service
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Complete air-conditioning inspection, servicing, and repair for
                improved cooling performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;