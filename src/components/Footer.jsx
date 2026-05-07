import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/27721234567",
      color: "hover:text-green-400",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://facebook.com",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com",
      color: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://tiktok.com",
      color: "hover:text-gray-300",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-20 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-red-950"></div>

      {/* GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-extrabold text-white mb-4">
              Keith-Kevin Appliance Repair
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Fast, reliable, and affordable appliance repair services for homes
              and businesses across South Africa.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-red-400 transition"
                >
                  {link.name}
                </a>
              ))}

            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h4>

            <div className="text-gray-300 space-y-2 text-sm">
              <p>📍 South Africa</p>
              <p>📞 073 871 5044</p>
              <p>📧 keithkevinrepair@gmail.com</p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-5 mt-6">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white transition transform hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>© {currentYear} Keith and Kevin Appliance Repair. All rights reserved.</p>

          <p>
            Designed By <span className="  text-blue-800 ">Xenobyte Web Studio</span>
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;