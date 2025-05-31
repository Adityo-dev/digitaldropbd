"use client";
import { Facebook, Minus, Plus, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const productDetails = {
  id: 1,
  name: "iPhone 14",
  retail_price: 109.19,
  discounted_price: 78.89,
  discount_percentage: 28,
  thumbnail: "/images/iphone-14.jpg",
  stock: 81,
  rating: 4.5,
  reviewCount: 2,
  specifications: [
    { label: "RAM", value: "16GB" },
    { label: "Hard Drive", value: "256GB SSD" },
    { label: "Screen Size", value: "13.3 inches" },
  ],
  deliveryInfo: [
    "Estimated Delivery Time 14-30 Days",
    "18 Months Warranty At Genuine Warranty Center",
    "Discount 30% On Xbox Series, Use Code: ECM30",
  ],
  sku: "IBX6XH-2",
  tags: "Accessories, Electronic, Game, PC Gaming, Tech Accessories",
};
// Mock addToCart function (replace with actual implementation)
const addToCart = (item) => {
  console.log("Added to cart:", item);
};

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedStock, setSelectedStock] = useState(
    productDetails?.stock || 0
  );

  const pathname = usePathname();

  // Handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Handle quantity increase
  const increaseQuantity = () => {
    if (quantity < selectedStock) setQuantity(quantity + 1);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    if (selectedStock === 0) return;
    addToCart({
      id: productDetails?.id,
      name: productDetails?.name,
      price: productDetails?.discounted_price || productDetails?.retail_price,
      image: productDetails?.thumbnail,
      quantity,
      stock: selectedStock,
    });
  };

  // Social media sharing data
  const socialMediaData = [
    {
      icon: <Facebook size={20} strokeWidth={1.5} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        `https://yourdomain.com${pathname}`
      )}`,
    },
    {
      icon: <Twitter size={20} strokeWidth={1.5} />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        `https://yourdomain.com${pathname}`
      )}`,
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.255-2.396-1.858-2.396-1.862 0-2.142 1.376-2.142 2.796v5.204h-3v-11h2.881v1.594h.041c.401-.761 1.38-1.858 2.838-1.858 3.035 0 3.6 1.997 3.6 4.592v6.672z" />
        </svg>
      ),
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        `https://yourdomain.com${pathname}`
      )}`,
    },
  ];

  if (!productDetails) {
    return <div className="text-center py-4">No product details available</div>;
  }

  return (
    <section className="space-y-4 sm:space-y-6">
      {/* Category & Brand */}
      <div className="flex items-center flex-wrap gap-6 text-[#888AA0]">
        <p>
          <span>Category: </span>
          <Link
            href={`/category/${
              productDetails?.category?.name?.toLowerCase() || ""
            }`}
            className="text-gray-900 text-sm hover:text-primary"
          >
            {productDetails?.category?.name || "N/A"}
          </Link>
        </p>
        <p>
          <span>Brand: </span>
          <Link
            href={`/brand/${productDetails?.brand?.name?.toLowerCase() || ""}`}
            className="text-gray-900 text-sm hover:text-primary"
          >
            {productDetails?.brand?.name || "N/A"}
          </Link>
        </p>
      </div>

      {/* Title, Rating, and Stock */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl sm:text-4xl font-semibold">
            {productDetails?.name}
          </h1>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3.5">
        <span className="text-[#dd2831] text-4xl font-semibold ">
          ${productDetails?.discounted_price || 78.89}
        </span>
        <span className="text-[#848484] text-2xl line-through">
          ${productDetails?.retail_price || 109.19}
        </span>
        <span className="text-green-600 text-lg">
          (-{productDetails?.discount_percentage || 28}%)
        </span>
      </div>

      {/* Specifications */}
      {productDetails?.specifications &&
        productDetails.specifications.length > 0 && (
          <ul className="list-disc pl-5 space-y-2 text-[#848484]">
            {productDetails.specifications.map((spec, index) => (
              <li key={index}>
                {spec.label}: {spec.value || "N/A"}
              </li>
            ))}
          </ul>
        )}

      {/* Delivery and Warranty */}
      {productDetails?.deliveryInfo &&
        productDetails.deliveryInfo.length > 0 && (
          <div className="bg-[#e8f3fe] p-5 rounded-md text-[#0068c8] text-base">
            <ul className="list-disc pl-5 space-y-2">
              {productDetails.deliveryInfo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

      {/* Quantity and Add to Cart */}
      <div className="flex gap-4 items-center">
        <div className="flex items-center border rounded-md">
          <button
            onClick={decreaseQuantity}
            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer"
            aria-label="Decrease quantity"
          >
            <Minus size={16} strokeWidth={2} />
          </button>
          <div className="w-12 text-center text-lg" aria-live="polite">
            {quantity}
          </div>
          <button
            onClick={increaseQuantity}
            disabled={quantity >= selectedStock}
            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            aria-label="Increase quantity"
          >
            <Plus size={16} strokeWidth={2} />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={selectedStock === 0}
          className={`px-6 py-2 bg-[#0068c8] text-white font-semibold rounded hover:opacity-90 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed`}
          aria-label="Add to cart"
        >
          ADD TO CART
        </button>
      </div>

      {/* SKU and Tags */}
      <div className="border-t pt-2 text-sm text-[#848484]">
        <p>
          SKU:{" "}
          <span className="font-medium">
            {productDetails?.sku || "IBX6XH-2"}
          </span>
        </p>
        <p>
          Tags:{" "}
          <span className="font-medium">
            {productDetails?.tags ||
              "Accessories, Electronic, Game, PC Gaming, Tech Accessories"}
          </span>
        </p>
      </div>

      {/* Social Media Share */}
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium">Share:</p>
        <div className="flex gap-2">
          {socialMediaData.map((media, ind) => (
            <Link
              key={ind}
              href={media.url}
              target="_blank"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label={`Share on ${media.icon.type.name}`}
            >
              {media.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
