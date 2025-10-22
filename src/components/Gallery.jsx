import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Gallery1 from '../assets/Images/gallery1.png'
import Gallery2 from '../assets/Images/gallery2.png'
import Gallery3 from '../assets/Images/gallery3.png'
import Gallery4 from '../assets/Images/gallery4.png'
import Gallery5 from '../assets/Images/gallery5.png'
import Gallery6 from '../assets/Images/gallery6.png'
import FloatingContactMenu from "./FloatingContactMenu";

const galleryImages = [
  { src: Gallery1, alt: "Indian Classical Music Class" },
  { src: Gallery2, alt: "Indian Classical Music Class" },
  { src: Gallery3, alt: "Indian Classical Music Class" },
  { src: Gallery4, alt: "Indian Classical Music Class" },
  { src: Gallery5, alt: "Indian Classical Music Class" },
  { src: Gallery6, alt: "Indian Classical Music Class" },
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
        <title>Gallery | Hunar Sangeet Mahavidyalaya - Vasant Kunj</title>
        <meta
          name="description"
          content="Explore photos showcasing music, dance, and fine arts classes, performances, and events at Hunar Sangeet Mahavidyalaya Vasant Kunj."
        />
        <meta
          name="keywords"
          content="Music school gallery, dance class photos, fine arts images, cultural events, Vasant Kunj"
        />
      </Helmet>
      <section className="bg-beige text-charcoal min-h-screen px-6 py-12">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-maroon text-4xl font-extrabold mb-10 text-center">
            Gallery
          </h1>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            Take a glimpse into our vibrant classes, dynamic performances, and creative environment through these photos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map(({ src, alt }, idx) => (
            <div
              key={idx}
              onClick={() => handleImageClick(src)}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
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
        <FloatingContactMenu/>
      </section>
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeModal}>
          <img
            src={selectedImage}
            alt="fullscreen"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Close Button */}
          <button
            className="absolute top-4 right-8 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
