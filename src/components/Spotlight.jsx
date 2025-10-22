import React from "react";
import { Helmet } from "react-helmet";
import FloatingContactMenu from "./FloatingContactMenu";

const performances = [
  {
    title: "Tabla Mastery by Anjali",
    description:
      "Anjali's outstanding tabla performance demonstrating intricate rhythmic patterns and precision.",
    videoUrl: "https://www.youtube.com/embed/jJ2WseDHEPI",
  },
  {
    title: "Classical Vocal - Ravi Kumar",
    description:
      "Watch Ravi's soulful rendition showcasing classical vocal techniques and emotion.",
    videoUrl: "https://www.youtube.com/embed/HOauo2CRbs8?si=gRlokatQK2NB1QhZ",
  },
  {
    title: "Bollywood Dance Group Performance",
    description:
      "Energetic group performance featuring top Bollywood dance moves and synchronization.",
    videoUrl: "https://www.youtube.com/embed/jDCwWfxQkyc?si=3Ox7Vj6JxRvzr4-w",
  },
  {
    title: "Hip-Hop Dance by Neha",
    description:
      "Neha's high-energy hip-hop freestyle demonstrating smooth transitions and rhythm.",
    videoUrl: "https://www.youtube.com/embed/R9w_DqS-RkA?si=bH_-Y0I5xTjqu7rQ",
  },
];

export default function Spotlight() {
  return (
    <>
      <Helmet>
        <title>Spotlight | Hunar Sangeet Mahavidyalaya - Surya Nagar</title>
        <meta
          name="description"
          content="View talented student performances in music, dance, and fine arts at Hunar Sangeet Mahavidyalaya Surya Nagar."
        />
        <meta
          name="keywords"
          content="Student performances, music videos, dance highlights, tabla, classical vocals, bollywood dance, hip-hop"
        />
      </Helmet>
      <section className="min-h-screen px-6 py-12 bg-gradient-to-br from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] text-white flex flex-col pt-[120px]">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-extrabold mb-10 text-center drop-shadow-lg">
            Student Spotlight
          </h1>
          <p className="mb-10 max-w-3xl mx-auto text-center text-lg text-white/90 leading-relaxed">
            Discover the talent and passion of our students through these
            curated performance videos across various art forms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {performances.map(({ title, description, videoUrl }) => (
              <div
                key={title}
                className="bg-black bg-opacity-70 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={videoUrl}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gradient bg-gradient-to-r from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] bg-clip-text text-transparent">
                    {title}
                  </h2>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FloatingContactMenu />
      </section>
    </>
  );
}
