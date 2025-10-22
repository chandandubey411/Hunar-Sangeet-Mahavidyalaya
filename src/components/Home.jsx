import React from "react";
import { Helmet } from "react-helmet";
import FloatingContactMenu from "./FloatingContactMenu";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hunar Sangeet Mahavidyalaya - Surya Nagar | Music, Dance & Fine Arts School</title>
        <meta
          name="description"
          content="Join Hunar Sangeet Mahavidyalaya, Vasant Kunj's premier school for Indian classical music, dance, western and Bollywood dance, and fine arts. Expert faculty, flexible timings, and a nurturing environment."
        />
        <meta name="keywords" content="Indian classical music, dance school, fine arts classes, Kathak, Bharatnatyam, guitar lessons, Tabla, Harmonium, Vasant Kunj" />
        <meta name="author" content="Hunar Sangeet Mahavidyalaya" />
      </Helmet>

      <section className="bg-beige text-charcoal min-h-screen flex flex-col justify-center px-6 py-16">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="font-extrabold text-5xl md:text-6xl mb-8 text-maroon leading-tight drop-shadow-md">
            Welcome to <span className="text-golden">Hunar Sangeet Mahavidyalaya</span> – Surya Nagar
          </h1>
          <p className="mb-10 max-w-3xl mx-auto text-xl md:text-2xl font-medium tracking-wide leading-relaxed">
            Dedicated to nurturing talent, inspiring creativity, and celebrating the rich heritage of music, dance, and fine arts. Join our expert faculty to build confidence, discipline, and artistic expression.
          </p>
          <a
            href="/contactUs"
            className="inline-block bg-golden text-maroon font-extrabold text-lg px-12 py-4 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-300 ease-in-out shadow-yellow-300"
            aria-label="Book your free demo class"
          >
            Book Your Free Demo Class
          </a>
        </div>

        <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-maroon text-beige rounded-xl p-8 shadow-2xl transform hover:-translate-y-3 transition-transform duration-500 ease-in-out cursor-default">
            <h2 className="text-3xl font-bold mb-5 tracking-wide drop-shadow-sm">
              Our Courses
            </h2>
            <ul className="list-disc list-inside text-lg space-y-3">
              <li className="hover:text-golden transition-colors">Indian Classical Music</li>
              <li className="hover:text-golden transition-colors">Kathak / Bharatnatyam Dance</li>
              <li className="hover:text-golden transition-colors">Western / Bollywood Dance</li>
              <li className="hover:text-golden transition-colors">Guitar, Keyboard, Tabla, Harmonium</li>
              <li className="hover:text-golden transition-colors">Flute, Dholak</li>
              <li className="hover:text-golden transition-colors">Fine Arts</li>
            </ul>
          </div>

          <div className="bg-golden text-maroon rounded-xl p-8 shadow-2xl transform hover:-translate-y-3 transition-transform duration-500 ease-in-out cursor-default">
            <h2 className="text-3xl font-bold mb-5 tracking-wide drop-shadow-sm">
              Why Choose Us?
            </h2>
            <p className="text-lg leading-relaxed font-medium">
              Experienced and passionate faculty combining traditional techniques with modern teaching. Flexible timings and personalized attention to nurture creativity and stage presence for all levels.
            </p>
          </div>

          <div className="bg-maroon text-beige rounded-xl p-8 shadow-2xl text-center transform hover:-translate-y-3 transition-transform duration-500 ease-in-out cursor-default">
            <h2 className="text-3xl font-bold mb-5 tracking-wide drop-shadow-sm">
              Visit Us
            </h2>
            <address className="not-italic mb-6 text-lg font-medium leading-relaxed tracking-wide">
              B-11, behind Sleepwell, near Hotel Sunrise Park, <br />
              Rampuri, Chander Nagar, Surya Nagar, <br />
              Ghaziabad, UP → 201011
            </address>
            <a
              href="https://maps.app.goo.gl/B1ArG2DK1rhwVAMe6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-golden underline font-bold hover:text-yellow-400 text-lg transition-colors"
              aria-label="Google Maps location"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
      <FloatingContactMenu/>
    </>
  );
}
