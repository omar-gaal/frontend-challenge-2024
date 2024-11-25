// app/product-list-page/page.js
"use client";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard"; // Correct import

export default function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data); // Store all products
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list-page py-16">
      <h2 className="text-3xl text-center font-bold mb-8">All Products</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}
