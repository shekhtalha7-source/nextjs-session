'use client'
import React, { useState } from 'react';
import ProductCard from "./ProductCart";

const FilterComponent = ({products}) => {
    const[search,setSearch] =useState('');
    const [sorting, setSorting] = useState("");

    const filteredProduct = products.filter((product) =>
    
      product?.title?.toLowerCase().includes(search.toLowerCase())
    )

    if (sorting === "high") {
        filteredProduct.sort((x,y) => (y.rating?.rate?? 0)- (x.rating?.rate?? 0));
    } else if (sorting === "low") {
    filteredProduct.sort((x, y) => (x.rating?.rate ?? 0) - (y.rating?.rate ?? 0));
  }



    return (
  <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">

  <input
    className="input w-full sm:flex-1"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    type="text"
    placeholder="Search"
  />

  <select
    value={sorting}
    onChange={(e) => setSorting(e.target.value)}
    className="select w-full sm:w-48"
  >
    <option value="">Sort</option>
    <option value="high">High</option>
    <option value="low">Low</option>
  </select>

</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {filteredProduct.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

  </div>
);
};

export default FilterComponent;