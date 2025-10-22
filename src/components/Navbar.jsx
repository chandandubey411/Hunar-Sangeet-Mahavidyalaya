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

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition-colors ${
      isActive
        ? "text-golden bg-maroon font-bold"
        : "text-beige hover:text-golden"
    }`;

  return (
    <header className="bg-maroon text-beige sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo & Title */}
        <NavLink to="/" className="flex items-center gap-2 md:gap-4">
          <div className="rounded-full overflow-hidden">
            <img
            src={logo}
            alt="Hunar Sangeet Mahavidyalaya logo"
            className="h-16 w-16 object-cover border-2 border-golden rounded-full"
            />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">
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
            className="bg-golden text-maroon px-5 py-2 rounded-xl font-semibold hover:bg-yellow-500 transition"
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
          className="md:hidden text-beige hover:text-golden text-3xl p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-golden"
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-maroon border-t border-golden shadow-lg absolute w-full left-0 top-full">
          <div className="flex flex-col px-4 py-6 space-y-3 text-lg font-semibold">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded px-3 py-2 transition-colors ${
                    isActive
                      ? "text-golden bg-beige font-bold"
                      : "text-beige hover:bg-golden hover:text-maroon"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/917303064817"
              className="block bg-golden text-maroon px-5 py-2 rounded-xl font-semibold text-center hover:bg-yellow-500 transition"
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
