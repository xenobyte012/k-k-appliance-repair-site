import React from "react";
import image_1 from "../images/image-1.webp";
import image_2 from "../images/image-2.webp";
import profileImage_1 from "../images/profile-picture.jpg";
import star from "../images/star.webp";

function Testimonials() {
  const data = [
    {
      name: "Thabo Mokoena",
      review:
        "“My fridge stopped working overnight and they fixed it the same day. Fast, professional, and very affordable service.”",
      profilePicture: profileImage_1,
      date: "2 weeks ago",
    },
    {
      name: "Lerato Nkosi",
      review:
        "“Excellent service! My washing machine was leaking badly, but they repaired it quickly. Highly recommend them.”",
      profilePicture: image_1,
      date: "1 month ago",
    },
    {
      name: "Kabelo Dlamini",
      review:
        "“Very reliable technicians. They fixed my oven and explained everything clearly. Great experience overall.”",
      profilePicture: image_2,
      date: "3 months ago",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-red-950"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto mb-16">

          <p className="text-red-400 uppercase tracking-[4px] font-semibold mb-4">
            Testimonials
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            What Our Customers Say
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Real feedback from clients who trusted Keith-Kevin Appliance Repair
            for fast and reliable service.
          </p>
        </div>

        {/* CARDS */}
        <div className="pt-4 flex px-4 md:flex-row flex-col gap-8 justify-center mx-auto max-w-7xl">

          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full md:w-96 text-left
              bg-white/10 backdrop-blur-md border border-white/10
              shadow-2xl rounded-3xl p-6 hover:-translate-y-2 transition duration-300"
            >

              {/* USER INFO */}
              <div className="flex gap-4 pb-4">

                <img
                  alt="profile picture"
                  loading="lazy"
                  src={item.profilePicture}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />

                <div>

                  <div className="font-semibold text-white text-lg">
                    {item.name}
                  </div>

                  <div className="text-gray-400 text-sm">
                    {item.date}
                  </div>

                </div>
              </div>

              {/* STARS */}
              <div className="flex gap-1 pb-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={star}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>

              {/* REVIEW */}
              <p className="text-gray-300 leading-relaxed">
                {item.review}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;