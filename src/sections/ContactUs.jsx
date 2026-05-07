import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

function ContactUs() {
  const phoneNumber = "27738715044";
  const message = "Hello, I am interested in your appliance repair services.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <>
      <section
        className="relative py-24 px-6 overflow-hidden"
        id="contact"
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-red-950"></div>

        {/* GLOW EFFECTS */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          {/* HEADER */}
          <div className="max-w-5xl mx-auto text-center mb-16">

            <p className="text-red-400 uppercase tracking-[4px] font-semibold mb-4">
              Contact Us
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Get In Touch Today
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Fast, reliable, and professional appliance repair services for
              homes and businesses.
            </p>
          </div>

          {/* MAIN LAYOUT */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            {/* CONTACT INFO */}
            <div className="space-y-6">

              {/* PHONE */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-4 shadow-lg">

                <div className="bg-gradient-to-br from-blue-600 to-red-500 p-4 rounded-xl">
                  <Phone className="text-white" />
                </div>

                <div>
                  <p className="font-semibold text-white text-lg">
                    Call Us
                  </p>

                  <p className="text-gray-300">
                    070 441 9275
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-4 shadow-lg">

                <div className="bg-gradient-to-br from-blue-600 to-red-500 p-4 rounded-xl">
                  <Mail className="text-white" />
                </div>

                <div>
                  <p className="font-semibold text-white text-lg">
                    Email
                  </p>

                  <p className="text-gray-300">
                    xenobyte012@gmail.com
                  </p>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-4 shadow-lg">

                <div className="bg-gradient-to-br from-blue-600 to-red-500 p-4 rounded-xl">
                  <MessageCircle className="text-white" />
                </div>

                <div>
                  <p className="font-semibold text-white text-lg">
                    WhatsApp
                  </p>

                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition"
                  >
                    Start Chat
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl space-y-5">

              {/* NAME */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-4 rounded-xl bg-slate-900/80 text-white border border-slate-700 outline-none focus:border-red-400 transition"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-4 rounded-xl bg-slate-900/80 text-white border border-slate-700 outline-none focus:border-red-400 transition"
                  required
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="081 234 5678"
                  className="w-full p-4 rounded-xl bg-slate-900/80 text-white border border-slate-700 outline-none focus:border-red-400 transition"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm">
                  Message
                </label>

                <textarea
                  placeholder="Tell us about your appliance issue..."
                  className="w-full p-4 rounded-xl bg-slate-900/80 text-white border border-slate-700 min-h-[140px] outline-none focus:border-red-400 transition"
                  required
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-red-500 hover:opacity-90 transition py-4 rounded-xl text-white font-semibold text-lg shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;