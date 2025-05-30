import Link from "next/link";
import RowCart from "@/components/productsCart/RowCart";
// import ProductsData src/data/ProductsData.js
import { ProductsData } from "@/data/ProductsData";

// filtering the products to get only those that are trending
const trendingProductsData = ProductsData.filter(
  (product) => product?.isTrending
).slice(0, 6);

const TrendingProducts = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Trending Products
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Discover our most popular items this week
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {trendingProductsData.map((product) => (
          <RowCart key={product.id} cartData={product} />
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
