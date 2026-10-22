"use client";

import { useState, useContext } from "react";
import { OurContext } from "@/context/ContProvider";
import ProductCard from '../../components/ProductCart';
import {Hero} from "../../components/Hero";

export default function Products() {
  const context = useContext(OurContext);
  const products = context.products;
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Hero />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products
          .slice(0, showAll ? products.length : 8)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      
<div className="mt-8 flex justify-center">
  <button
    type="button"
    onClick={() => setShowAll(!showAll)}
    className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
  >
    {showAll ? "See Less" : "See More"}
  </button>
</div>

</>
);
}