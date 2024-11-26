import { useState } from "react";

const Carousel = () => {
  const images = [
    "https://via.placeholder.com/600x300/4e73df/ffffff?text=Image+1",
    "https://via.placeholder.com/600x300/36b9cc/ffffff?text=Image+2",
    "https://via.placeholder.com/600x300/f1c40f/ffffff?text=Image+3",
    "https://via.placeholder.com/600x300/9b59b6/ffffff?text=Image+4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-8">
      {/* Carousel Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Carousel Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={prevImage}
          className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          &#8249;
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={nextImage}
          className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
