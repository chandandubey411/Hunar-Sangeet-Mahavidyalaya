import React from "react";
import { Helmet } from "react-helmet";
import FloatingContactMenu from "./FloatingContactMenu";

const coursesList = [
  {
    title: "Indian Classical Music",
    description: "Vocal and instrumental training focusing on ragas, talas, and compositions to build a strong classical foundation.",
  },
  {
    title: "Kathak / Bharatnatyam Dance",
    description: "Classical Indian dance forms taught with emphasis on rhythm, expressions, and storytelling.",
  },
  {
    title: "Western / Bollywood Dance",
    description: "Energetic and contemporary dance styles covering popular Bollywood routines and western choreography.",
  },
  {
    title: "Guitar & Keyboard",
    description: "Practical instrumental classes for beginners to advanced students covering music theory and performance.",
  },
  {
    title: "Tabla & Dholak",
    description: "Percussion training to master rhythmic patterns and accompany classical and folk music.",
  },
  {
    title: "Harmonium & Flute",
    description: "Melodic instrumental lessons with focus on breath control, fingering, and techniques.",
  },
  {
    title: "Fine Arts",
    description: "Drawing, painting, and creative arts classes nurturing artistic skills and imagination.",
  },
];

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses | Hunar Sangeet Mahavidyalaya - Surya Nagar</title>
        <meta
          name="description"
          content="Explore a wide range of music, dance, and fine arts courses at Hunar Sangeet Mahavidyalaya Vasant Kunj. Classes for all ages and skill levels."
        />
        <meta name="keywords" content="Music courses, Dance classes, Fine arts, Kathak, Bharatnatyam, Guitar lessons, Tabla training, Vasant Kunj" />
      </Helmet>
      <section className="bg-beige text-charcoal min-h-screen px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-maroon font-extrabold text-4xl mb-10 text-center">
            Our Courses
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coursesList.map(({ title, description }) => (
              <article
                key={title}
                className="border-2 border-maroon rounded-lg p-6 shadow-lg hover:shadow-xl transition"
              >
                <h2 className="text-2xl font-semibold text-maroon mb-3">
                  {title}
                </h2>
                <p className="text-charcoal text-base">{description}</p>
              </article>
            ))}
          </div>
        </div>
        <FloatingContactMenu/>
      </section>
    </>
  );
}
