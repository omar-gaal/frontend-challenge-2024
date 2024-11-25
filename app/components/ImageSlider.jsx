"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ImageSlider() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch products and store only the first 3 images
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data.slice(0, 3)); // Only use the first 3 products
    };

    fetchProducts();
  }, []);

  // Handle previous image click
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Handle next image click
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative text-white text-center py-24 max-w-7xl mx-auto">
      {/* Image slider */}
      <div className="relative">
        {products.length > 0 && (
          <Link href={`/product-page/${products[currentIndex].id}`}>
            <img
              src={products[currentIndex].image} // Use image from API
              alt="Product"
              className="mx-auto w-[500px] h-[500px] object-cover" // Center image and use fixed width/height
            />
          </Link>
        )}

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="text-black absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl"
        >
          &#60;
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="text-black absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl"
        >
          &#62;
        </button>

        {/* Radio buttons at the bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
