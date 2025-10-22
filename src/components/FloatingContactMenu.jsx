import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContactMenu() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-4 ">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917303064817"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 text-white rounded-full w-14 h-14 shadow-2xl
                  hover:bg-green-600 transition transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Phone Button with gradient */}
      <a
        href="tel:+917303064817"
        className="flex items-center justify-center rounded-full w-14 h-14 text-white shadow-2xl transition
                   transform hover:scale-110"
        aria-label="Call Us"
        style={{
          background: "linear-gradient(135deg, #FF4FA0 0%, #8C52FF 60%, #43C6DB 100%)",
        }}
      >
        <FaPhoneAlt size={24} />
      </a>
    </div>
  );
}
