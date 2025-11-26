import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/spotlight", label: "Spotlight" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Us" },
  { to: "/contactUs", label: "Contact Us" },
  { to: "/timingandLocation", label: "Timing and Location" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  // Desktop / Tablet link style
  const linkClass = ({ isActive }) =>
    `px-3 py-1 rounded-full text-sm lg:text-base transition-colors ${
      isActive
        ? "bg-white text-pink-600 font-bold"
        : "text-white hover:text-cyan-200"
    }`;

  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 text-white z-50 shadow-lg fixed top-0 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 md:px-6 py-3 overflow-x-auto md:overflow-visible">
        {/* Left: Logo + Title */}
        <NavLink
          to="/"
          className="flex items-center gap-2 md:gap-3 flex-shrink-0"
        >
          <div className="rounded-full overflow-hidden bg-black flex-shrink-0">
            <img
              src={logo}
              alt="Hunar Sangeet Mahavidyalaya logo"
              className="h-10 w-10 md:h-16 md:w-16 object-cover border-2 md:border-4 border-pink-300 shadow-md rounded-full"
            />
          </div>
          <h1 className="text-base md:text-lg lg:text-xl font-extrabold tracking-tight bg-gradient-to-r from-pink-100 via-purple-100 to-cyan-100 bg-clip-text text-transparent whitespace-nowrap">
            Hunar Sangeet Mahavidyalaya
          </h1>
        </NavLink>

        {/* Middle + Right: Desktop / Tablet Links (one single line) */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3 font-semibold whitespace-nowrap flex-1 justify-end">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}

          <a
            href="https://wa.me/917303064817"
            className="ml-2 inline-flex items-center justify-center px-4 py-1.5 lg:px-5 lg:py-2 rounded-full bg-white text-pink-600 text-sm lg:text-base font-semibold border border-pink-200 hover:bg-pink-500 hover:text-white transition whitespace-nowrap flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </nav>

        {/* Right: Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-white hover:text-pink-200 text-2xl p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 flex-shrink-0"
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (only for small screens) */}
      {open && (
        <nav className="md:hidden bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 border-t border-white/20 shadow-lg w-full z-50">
          <div className="flex flex-col px-4 py-5 space-y-2 text-base font-semibold">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 transition-colors ${
                    isActive
                      ? "text-pink-500 bg-white font-bold"
                      : "text-white/90 hover:text-cyan-200 hover:bg-white/10"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <a
              href="https://wa.me/917303064817"
              className="mt-2 block bg-white text-pink-600 px-5 py-2 rounded-xl font-semibold text-center hover:bg-pink-500 hover:text-white border border-pink-200 transition"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
