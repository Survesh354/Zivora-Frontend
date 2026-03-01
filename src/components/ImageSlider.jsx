import { useState } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import { useNavigate } from "react-router-dom";

function ImageSlider() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">

      {/* Image */}
      <img
        src={images[current]}
        alt="Slide"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center z-10">
        <p className="text-lg mb-2">New Arrivals</p>
        <h1 className="text-5xl font-bold mb-6">
          Discover the latest trends
        </h1>
        <button
          onClick={() => navigate("/shop")}
          className="bg-white text-black px-6 py-2 font-semibold hover:bg-gray-200 transition"
        >
          Shop →
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-20"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-20"
      >
        &#10095;
      </button>

    </div>
  );
}

export default ImageSlider;