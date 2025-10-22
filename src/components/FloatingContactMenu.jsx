import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContactMenu() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917303064817"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 text-white rounded-full w-14 h-14 shadow-lg hover:bg-green-600 transition"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+917303064817"
        className="flex items-center justify-center bg-maroon text-white rounded-full w-14 h-14 shadow-lg hover:bg-golden transition"
        aria-label="Call Us"
        style={{
          backgroundColor: "#800000", // maroon
          boxShadow: "0 2px 12px rgba(128,0,0,0.25)",
        }}
      >
        <FaPhoneAlt size={24} />
      </a>
    </div>
  );
}
