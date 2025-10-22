import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png"; // Replace with your logo path
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/courses", label: "Courses" },
    { to: "/spotlight", label: "Spotlight" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contactUs", label: "Contact Us" },
    { to: "/timingandLocation", label: "Timing & Location" },
  ];

  const socialLinks = [
    { href: "https://facebook.com/", icon: <FaFacebookF /> },
    { href: "https://instagram.com/", icon: <FaInstagram /> },
    { href: "https://twitter.com/", icon: <FaTwitter /> },
    { href: "https://youtube.com/", icon: <FaYoutube /> },
  ];

  return (
    <footer className="bg-maroon text-beige py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="flex items-center mb-6 md:mb-0">
          <img
            src={logo}
            alt="Hunar Sangeet Mahavidyalaya logo"
            className="h-16 w-16 rounded-full border-2 border-golden object-cover mr-4"
          />
          <span className="text-xl font-bold tracking-wide">Hunar Sangeet Mahavidyalaya</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-golden transition font-semibold"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex space-x-6 text-2xl">
          {socialLinks.map(({ href, icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-golden transition"
              aria-label={`Link to Hunar Sangeet on ${href.split('.')[1]}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-beige/70">
        © 2025 Hunar Sangeet Mahavidyalaya - Surya Nagar. All rights reserved.
      </div>
    </footer>
  );
}
