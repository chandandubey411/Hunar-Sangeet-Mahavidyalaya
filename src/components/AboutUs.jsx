import React from "react";
import { Helmet } from "react-helmet";
import FloatingContactMenu from "./FloatingContactMenu";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | Hunar Sangeet Mahavidyalaya - Surya Nagar</title>
        <meta
          name="description"
          content="Learn about Hunar Sangeet Mahavidyalaya, Surya Nagar – our mission to nurture creativity and talent in music, dance, and fine arts through expert faculty and modern teaching methods."
        />
        <meta
          name="keywords"
          content="Music school about, dance academy, fine arts education, Indian classical music teaching, Kathak school, Surya Nagar music school"
        />
      </Helmet>
      <section className="min-h-screen px-6 py-12 bg-gradient-to-br from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] flex items-center justify-center pt-[120px]">
        <div className="container mx-auto max-w-5xl bg-black bg-opacity-70 rounded-2xl shadow-2xl p-5 md:p-10 text-white backdrop-blur-lg">
          <h1 className="font-extrabold text-4xl md:text-5xl pb-2 mb-10 text-center bg-gradient-to-r from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] bg-clip-text text-transparent drop-shadow">
            About Hunar Sangeet Mahavidyalaya
          </h1>
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              Hunar Sangeet Mahavidyalaya – Surya Nagar is dedicated to nurturing talent, inspiring creativity, and celebrating the rich heritage of music, dance, and fine arts. Guided by experienced and passionate faculty, we blend traditional training with modern teaching methods to help students build confidence, discipline, and self-expression.
            </p>
            <p>
              We offer expert training in Indian Classical Music, Kathak/Bharatnatyam, Western/Bollywood Dance, Guitar, Keyboard, Tabla, Dholak, Harmonium, Flute, and Fine Arts. Our structured programs and personalized attention create an environment where every student can grow artistically, whether they are beginners or advanced learners.
            </p>
            <p>
              At Hunar Sangeet Mahavidyalaya, we believe that nurturing artistic skills goes beyond technique. We foster stage presence, creativity, and passion that empowers our students to shine in their artistic journeys.
            </p>
            <p>
              Our flexible schedules and supportive community make pursuing your passion for the arts enriching and enjoyable.
            </p>
          </div>
        </div>
      </section>
      <FloatingContactMenu/>
    </>
  );
}
