"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-none text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
    
        <Link href="/">
          <img src="/novicellLogo.png" alt="" />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/product-list-page" className="hover:text-blue-400">Products</Link>
          {/* <Link href="/404page" className="hover:text-blue-400">About Us</Link> */}
          <Link href="/404page" className="hover:text-blue-400">Cart</Link>
        </nav>
      </div>
    </header>
  );
}
