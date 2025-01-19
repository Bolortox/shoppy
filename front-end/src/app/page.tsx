"use client";
import { useState } from "react";
import { HomePage } from "./components/home-page/HomePage";
import { ProductDisplay } from "./components/products/ProductsDisplay";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ProductDisplay/>
      
    </div>
  );
}
