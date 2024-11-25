// import Image from "next/image";

// export default function Home() {
//   return <div></div>;
// }
"use client";
import ImageSlider from "./components/ImageSlider";

import { useState } from "react";
import { useEffect } from "react";
import FeaturedProducts from "/app/components/FeaturedProducts.jsx";
export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchFakestoreapi();
  }, []);

  async function fetchFakestoreapi() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  }

  return (
    <div>
      {/* Hero section with ImageSlider */}
      <ImageSlider />

      <FeaturedProducts products={products} />
    </div>
  );
}
