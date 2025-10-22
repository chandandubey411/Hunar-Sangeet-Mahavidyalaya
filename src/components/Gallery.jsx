import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Gallery1 from '../assets/Images/gallery1.png';
import Gallery2 from '../assets/Images/gallery2.png';
import Gallery3 from '../assets/Images/gallery3.png';
import Gallery4 from '../assets/Images/gallery4.png';
import Gallery5 from '../assets/Images/gallery5.png';
import Gallery6 from '../assets/Images/gallery6.png';
import FloatingContactMenu from "./FloatingContactMenu";

const galleryImages = [
  { src: Gallery1, alt: "Indian Classical Music Class" },
  { src: Gallery2, alt: "Kathak Dance Performance" },
  { src: Gallery3, alt: "Bollywood Dance Group" },
  { src: Gallery4, alt: "Guitar Lesson in Progress" },
  { src: Gallery5, alt: "Tabla Player Performance" },
  { src: Gallery6, alt: "Fine Arts Workshop" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  
  return (
    <>
      <Helmet>
        <title>Gallery | Hunar Sangeet Mahavidyalaya - Surya Nagar</title>
        <meta
          name="description"
          content="Explore photos showcasing music, dance, and fine arts classes, performances, and events at Hunar Sangeet Mahavidyalaya Surya Nagar."
        />
        <meta
          name="keywords"
          content="Music school gallery, dance class photos, fine arts images, cultural events, Surya Nagar"
        />
      </Helmet>

      <section className="min-h-screen px-6 py-12 bg-gradient-to-br from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] text-white flex flex-col pt-[120px]">
        <div className="container mx-auto max-w-6xl bg-black bg-opacity-60 rounded-3xl p-5 md:p-10 backdrop-blur-md shadow-2xl">
          <h1 className="text-4xl font-extrabold mb-8 text-center drop-shadow-lg">
            Gallery
          </h1>
          <p className="mb-10 text-center max-w-3xl mx-auto text-white/90 leading-relaxed">
            Take a glimpse into our vibrant classes, dynamic performances, and creative environment through these photos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryImages.map(({ src, alt }, idx) => (
              <div
                key={idx}
                onClick={() => handleImageClick(src)}
                className="rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <FloatingContactMenu />
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Full view"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-8 text-white text-4xl font-bold hover:text-pink-400 transition"
            onClick={closeModal}
            aria-label="Close full-screen image"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
