import React from "react";
import { Helmet } from "react-helmet";
import FloatingContactMenu from "./FloatingContactMenu";

export default function TimingandLocation() {
  return (
    <>
      <Helmet>
        <title>Timing & Location | Hunar Sangeet Mahavidyalaya - Surya Nagar</title>
        <meta
          name="description"
          content="View operating hours and location details for Hunar Sangeet Mahavidyalaya, [translate:Surya Nagar], the hub for music, dance, and fine arts education."
        />
        <meta
          name="keywords"
          content="Music school timing, operating hours, location, [translate:Surya Nagar], contact, address"
        />
      </Helmet>

      <section className="min-h-screen px-3 md:px-6 py-12 bg-gradient-to-br from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] text-white flex flex-col pt-[120px]">
        <div className="container mx-auto max-w-4xl bg-black bg-opacity-70 rounded-lg shadow-xl p-4 md:p-8 backdrop-blur-md">
          <h1 className="text-4xl font-extrabold mb-10 text-center drop-shadow-lg">
            Timing & Location
          </h1>

          {/* Timing */}
          <div className="bg-white bg-opacity-10 rounded-lg shadow-md p-8 mb-12 max-w-md mx-auto text-white/90">
            <h2 className="text-3xl font-semibold mb-6 text-center drop-shadow">
              Operating Hours
            </h2>
            <table className="w-full text-center border-collapse">
              <tbody>
                <tr className="border-b border-white/30">
                  <td className="py-3 font-semibold">Monday</td>
                  <td className="py-3">Closed</td>
                </tr>
                {[
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <tr key={day} className="border-b border-white/30">
                    <td className="py-3 font-semibold">{day}</td>
                    <td className="py-3">11 AM - 8 PM</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Location */}
          <div className="bg-white bg-opacity-10 rounded-lg shadow-md p-4 md:p-8 max-w-4xl mx-auto text-white/90">
            <h2 className="text-3xl font-semibold mb-6 text-center drop-shadow">
              Find Us
            </h2>
            <address className="not-italic text-center text-lg leading-relaxed mb-6">
              B11, behind [translate:Sleepwell], near [translate:Hotel Sunshine Park],
              <br />
              [translate:Rampuri], [translate:Chander Nagar], [translate:Surya Nagar],
              <br />
              [translate:Ghaziabad], [translate:Uttar Pradesh] 201011
            </address>
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                title="Hunar Sangeet Mahavidyalaya Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8496820369737!2d77.3236569!3d28.664219199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5fd77bba43%3A0x9322f76017f47a89!2sHunar%20Sangeet%20Mahavidyalaya%20Surya%20Nagar%20Ghaziabad!5e0!3m2!1sen!2sin!4v1760595367368!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <FloatingContactMenu />
      </section>
    </>
  );
}
