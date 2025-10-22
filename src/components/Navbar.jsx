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

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  // Custom gradient text for brand, colored nav links on hover
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition-colors ${
      isActive
        ? "text-pink-400 font-bold"
        : "text-white hover:text-cyan-300"
    }`;

  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 text-white z-50 shadow-lg fixed top-0">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo & Title */}
        <NavLink to="/" className="flex items-center gap-2 md:gap-4">
          <div className="rounded-full overflow-hidden bg-black">
            <img
              src={logo}
              alt="Hunar Sangeet Mahavidyalaya logo"
              className="h-16 w-24 md:w-16 object-cover rounded-full border-4 border-pink-400 shadow-md"
            />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hunar Sangeet Mahavidyalaya
          </h1>
        </NavLink>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-2 text-lg font-semibold">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/917303064817"
            className="bg-white text-pink-600 px-5 py-2 rounded-xl font-semibold hover:bg-pink-400 hover:text-white border-pink-300 border transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-white hover:text-pink-400 text-3xl p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 border-t border-cyan-400 shadow-lg absolute w-full left-0 top-full z-50">
          <div className="flex flex-col px-4 py-6 space-y-3 text-lg font-semibold">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded px-3 py-2 transition-colors ${
                    isActive
                      ? "text-pink-400 bg-white font-bold"
                      : "text-white hover:text-cyan-300 hover:bg-white/10"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/917303064817"
              className="block bg-white text-pink-600 px-5 py-2 rounded-xl font-semibold text-center hover:bg-pink-400 hover:text-white border-pink-300 border transition"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
