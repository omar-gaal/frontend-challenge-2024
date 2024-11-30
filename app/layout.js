"use client";
import "./globals.css";
import Header from "./components/ Header";
import Footer from "./components/Footer.jsx";
// import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
