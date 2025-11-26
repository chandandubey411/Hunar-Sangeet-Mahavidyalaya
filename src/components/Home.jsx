import React from "react";
import { Helmet } from "react-helmet";
import FloatingContactMenu from "./FloatingContactMenu";
import { Link } from "react-router-dom";
import { FaMusic, FaTheaterMasks, FaPaintBrush, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Hunar Sangeet Mahavidyalaya - Surya Nagar | Music, Dance & Fine Arts School
        </title>
        <meta
          name="description"
          content="Join Hunar Sangeet Mahavidyalaya, Surya Nagar's premier school for Indian classical music, dance, western and Bollywood dance, and fine arts. Expert faculty, flexible timings, and a nurturing environment."
        />
        <meta
          name="keywords"
          content="Indian classical music, dance school, fine arts classes, Kathak, Bharatnatyam, guitar lessons, Tabla, Harmonium, Surya Nagar"
        />
        <meta name="author" content="Hunar Sangeet Mahavidyalaya" />
      </Helmet>

      {/* Background + Hero */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] pt-[120px] pb-20 flex items-center">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -left-10 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 -right-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Hero Content */}
          <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] items-center">
            {/* Left: Text */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-white/90 shadow-lg border border-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                Surya Nagar’s Dedicated Music, Dance & Fine Arts Academy
              </span>

              <h1 className="mt-5 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-[#FDFBFF] via-[#E2F3FF] to-[#FFDFEF] bg-clip-text text-transparent drop-shadow-2xl">
                Welcome to <br className="hidden sm:block" />
                Hunar Sangeet Mahavidyalaya
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl font-medium tracking-wide leading-relaxed text-white/90">
                Nurturing talent, inspiring creativity, and celebrating the
                rich heritage of{" "}
                <span className="font-semibold text-yellow-200">
                  music, dance & fine arts
                </span>
                . Learn from experienced faculty, gain stage confidence, and
                grow in a positive, artistic environment.
              </p>

              {/* Highlights */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3 max-w-xl text-sm text-white/90">
                <div className="flex items-center gap-2 bg-black/30 rounded-full px-3 py-1.5 border border-white/10">
                  <FaMusic className="text-yellow-300 text-lg flex-shrink-0" />
                  <span>Indian & Western Music</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 rounded-full px-3 py-1.5 border border-white/10">
                  <FaTheaterMasks className="text-pink-200 text-lg flex-shrink-0" />
                  <span>Classical & Bollywood Dance</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 rounded-full px-3 py-1.5 border border-white/10">
                  <FaPaintBrush className="text-cyan-200 text-lg flex-shrink-0" />
                  <span>Fine Arts & Drawing</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to={"/contactUs"}
                  className="inline-flex items-center gap-2 bg-[#FF4FA0] text-white font-extrabold text-base sm:text-lg px-5 sm:px-7 py-2.5 rounded-full shadow-xl hover:bg-[#8C52FF] hover:scale-105 transition-transform duration-300 ease-in-out"
                  aria-label="Book your free demo class"
                >
                  Book Your Free Demo Class
                  <span className="text-xl">🎶</span>
                </Link>
                <p className="text-sm sm:text-base text-white/85">
                  Limited seats • Personalized attention • All age groups welcome
                </p>
              </div>
            </div>

            {/* Right: Info Card */}
            <div className="mt-4 md:mt-0">
              <div className="relative rounded-3xl bg-black/40 border border-white/15 shadow-2xl backdrop-blur-xl p-6 sm:p-7 text-white">
                <div className="absolute -top-3 -right-3 rounded-full bg-emerald-400/80 px-3 py-1 text-xs font-semibold text-black shadow-lg">
                  Admissions Open
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-wide bg-gradient-to-r from-[#FFB6E1] via-[#D0B6FF] to-[#B9F1FF] bg-clip-text text-transparent">
                  Learn • Perform • Shine
                </h2>

                <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
                  <li>🎤 Indian classical vocals & light music</li>
                  <li>💃 Kathak, Bharatnatyam, Western & Bollywood dance</li>
                  <li>🎸 Guitar, Keyboard, Tabla, Harmonium, Flute, Dholak</li>
                  <li>🎨 Fine arts: Drawing, painting & creative art</li>
                </ul>

                <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs sm:text-sm">
                  <div className="rounded-2xl bg-white/5 border border-white/10 px-2 py-3">
                    <div className="font-extrabold text-lg sm:text-xl text-yellow-300">
                      10+
                    </div>
                    <div className="text-white/80">Years of Teaching</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/10 px-2 py-3">
                    <div className="font-extrabold text-lg sm:text-xl text-emerald-300">
                      500+
                    </div>
                    <div className="text-white/80">Happy Students</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/10 px-2 py-3">
                    <div className="font-extrabold text-lg sm:text-xl text-cyan-300">
                      Stage
                    </div>
                    <div className="text-white/80">Shows & Exams</div>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-2 text-sm text-white/85">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-cyan-200" />
                  <p>
                    B-11, behind Sleepwell, near Hotel Sunrise Park, Rampuri, Chander
                    Nagar, Surya Nagar, Ghaziabad, UP – 201011
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/B1ArG2DK1rhwVAMe6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm sm:text-base text-[#43C6DB] underline font-semibold hover:text-[#FFDFEF] transition-colors"
                  aria-label="Google Maps location"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Bottom 3 Feature Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Courses Card */}
            <div className="bg-black/45 text-white rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl border border-white/10 hover:-translate-y-2 hover:border-pink-200/70 transition-transform duration-500 cursor-default">
              <h2 className="text-2xl font-bold mb-4 tracking-wide bg-gradient-to-r from-[#FFB6E1] via-[#D0B6FF] to-[#B9F1FF] bg-clip-text text-transparent flex items-center gap-2">
                <FaMusic className="text-yellow-300" />
                Our Courses
              </h2>
              <ul className="list-disc list-inside text-sm sm:text-base space-y-2.5">
                <li>Indian Classical Vocals & Light Music</li>
                <li>Kathak / Bharatnatyam Dance</li>
                <li>Western / Bollywood Dance</li>
                <li>Guitar, Keyboard, Tabla, Harmonium</li>
                <li>Flute, Dholak & more instruments</li>
                <li>Fine Arts – Drawing & Painting</li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/85 text-[#4B2CA0] rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl border border-white/40 hover:-translate-y-2 hover:shadow-pink-200/40 transition-transform duration-500 cursor-default">
              <h2 className="text-2xl font-bold mb-4 tracking-wide bg-gradient-to-r from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                Experienced and passionate faculty blend{" "}
                <span className="font-semibold">traditional techniques</span> with
                modern teaching. Flexible batch timings, individual attention, and
                performance opportunities help students build confidence, discipline
                and strong stage presence.
              </p>
            </div>

            {/* Visit Us */}
            <div className="bg-black/45 text-white rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl border border-white/10 text-left hover:-translate-y-2 hover:border-cyan-200/70 transition-transform duration-500 cursor-default">
              <h2 className="text-2xl font-bold mb-4 tracking-wide bg-gradient-to-r from-[#FFB6E1] via-[#D0B6FF] to-[#B9F1FF] bg-clip-text text-transparent flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-300" />
                Visit Us
              </h2>
              <address className="not-italic mb-4 text-sm sm:text-base font-medium leading-relaxed tracking-wide">
                B-11, behind Sleepwell, near Hotel Sunrise Park, <br />
                Rampuri, Chander Nagar, Surya Nagar, <br />
                Ghaziabad, UP – 201011
              </address>
              <a
                href="https://maps.app.goo.gl/B1ArG2DK1rhwVAMe6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#43C6DB] underline font-semibold hover:text-[#FFDFEF] text-sm sm:text-base transition-colors"
                aria-label="Google Maps location"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <FloatingContactMenu />
    </>
  );
}
