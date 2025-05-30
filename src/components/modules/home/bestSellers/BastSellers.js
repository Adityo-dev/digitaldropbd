"use client";

import { useState, useMemo } from "react";
import ColumnCart from "@/components/productsCart/ColumnCart";
import { ProductsData } from "@/data/ProductsData";
import Image from "next/image";

const BestSellers = () => {
  // ✅ Filter only best sellers
  const bestSellers = useMemo(
    () => ProductsData.filter((product) => product?.isBestSellers),
    []
  );

  // ✅ Extract unique categories from best sellers
  const categories = useMemo(() => {
    return Array.from(new Set(bestSellers.map((product) => product.category)));
  }, [bestSellers]);

  // ✅ Automatically select first category
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // ✅ Filter products based on selected category
  const filteredProducts = bestSellers
    .filter((product) => product.category === selectedCategory)
    .slice(0, 8);

  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between  gap-4 pb-5 border-b border-[#dfd9d9]">
        <h2 className="text-3xl font-semibold text-black">Best Sellers</h2>
        <ul className="flex items-center gap-5 justify-center flex-wrap">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer capitalize transition font-bold ${
                selectedCategory === category ? " text-[#0068c8]" : "text-black"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 pt-6">
        {filteredProducts.map((product) => (
          <ColumnCart key={product.id} cartData={product} />
        ))}

        {/* See all Banner */}
        <div className="col-span-2 relative">
          <Image
            src={"/images/banner/banner-18.png"}
            width={600}
            height={600}
            alt=""
            className="w-full h-[350px] rounded-md object-cover"
          />

          <div className="absolute top-[120px] left-[50px] text-white">
            <p className="uppercase mb-1">best selling collection</p>
            <h3 className="text-6xl capitalize font-bold mb-5">big sale</h3>
            <button className="w-[160px] bg-[#0068c8] font-semibold py-3.5 uppercase rounded-sm">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
