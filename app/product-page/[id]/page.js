"use client";

import { useState, useEffect } from "react";

export default function ProductDetailPage({ params }) {
  const { id } = params; // Get the dynamic `id` from the URL

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      };

      fetchProduct();
    }
  }, [id]); // Re-fetch when the `id` changes

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-16">
      <div className="flex items-center justify-center gap-8 flex-col lg:flex-row">
        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-1/3 h-auto object-cover"
        />

        {/* Product Info */}
        <div className="text-center lg:text-center    w-6/12">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="w-full text-lg mt-4">{product.description}</p>
          <p className="text-xl font-bold text-blue-600 mt-4">
            ${product.price}
          </p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
