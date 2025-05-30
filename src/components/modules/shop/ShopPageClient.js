"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ColumnCart from "@/components/productsCart/ColumnCart";

// Sample product data (unchanged)
const products = [
  {
    id: 1,
    image: "/images/products/games/0.png",
    title: "AWIGNA by Warsha & Rittu",
    price: 471,
    discount: 0,
    rating: 5,
    url: "awigna-by-warsha-ritt",
    brand: "GlamGlow",
    color: ["Red"],
    size: ["M", "L", "XL"],
    stock: 14,
    category: "Watch",
  },
  {
    id: 2,
    image: "/images/products/games/1.png",
    title: "Golden Glam Lehenga",
    price: 432,
    discount: 0,
    rating: 4.9,
    url: "golden-glam-lehenga",
    brand: "GlamGlow",
    color: ["white"],
    size: ["S", "M", "L"],
    stock: 8,
    hot: true,
    category: "Watch",
  },
  {
    id: 3,
    image: "/images/products/games/2.png",
    title: "Royal Red Bridal Set",
    price: 468,
    discount: 10,
    rating: 4.8,
    url: "royal-red-bridal-set",
    brand: "AWIGNA",
    color: ["Red", "Navy Blue"],
    size: ["M", "L"],
    stock: 0,
    category: "Games",
  },
  {
    id: 4,
    image: "/images/products/games/3.png",
    title: "Peach Elegance Embroidery",
    price: 414,
    discount: 10,
    rating: 4.7,
    url: "peach-elegance-embroidery",
    brand: "IvoryCharm",
    color: ["Navy Blue", "Silver"],
    size: ["S", "M", "L", "XL"],
    stock: 5,
    hot: true,
    category: "Games",
  },
  {
    id: 5,
    image: "/images/products/games/4.png",
    title: "Maroon Net Games",
    price: 468,
    discount: 10,
    rating: 4.9,
    url: "maroon-net-bridal-wear",
    brand: "AWIGNA",
    color: ["Navy Blue"],
    size: ["M", "L"],
    stock: 12,
    category: "Games",
  },
  {
    id: 6,
    image: "/images/products/games/5.png",
    title: "Ivory Dream Lehenga",
    price: 441,
    discount: 10,
    rating: 4.8,
    url: "ivory-dream-lehenga",
    brand: "IvoryCharm",
    color: ["Silver"],
    size: ["S", "M", "L"],
    stock: 10,
    category: "Games",
  },
  {
    id: 7,
    image: "/images/products/games/6.png",
    title: "Navy Blue Watch",
    price: 495,
    discount: 10,
    rating: 4.7,
    url: "navy-blue-mirror-work",
    brand: "IvoryCharm",
    color: ["Navy Blue"],
    size: ["M", "L", "XL"],
    stock: 6,
    category: "Watch",
  },
  {
    id: 8,
    image: "/images/products/games/7.png",
    title: "Silver Zari Embroidered Set",
    price: 427,
    discount: 10,
    rating: 4.6,
    url: "silver-zari-embroidered-set",
    brand: "ZariLux",
    color: ["Red", "Silver"],
    size: ["S", "M", "L"],
    stock: 11,
    category: "Games",
  },
  {
    id: 9,
    image: "/images/products/games/8.png",
    title: "Mustard Silk Festive Wear",
    price: 396,
    discount: 10,
    rating: 4.5,
    url: "mustard-silk-festive-wear",
    brand: "IvoryCharm",
    color: ["white"],
    size: ["M", "L"],
    stock: 7,
    category: "Watch",
  },
  {
    id: 10,
    image: "/images/products/games/9.png",
    title: "Emerald Green Luxury Look",
    price: 477,
    discount: 10,
    rating: 4.9,
    url: "emerald-green-luxury-look",
    brand: "ZariLux",
    color: ["Red"],
    size: ["M", "L", "XL"],
    stock: 13,
    category: "Watch",
  },
  {
    id: 11,
    image: "/images/products/games/10.png",
    title: "Velvet Red Wedding Wear",
    price: 540,
    discount: 10,
    rating: 4.8,
    url: "velvet-red-wedding-wear",
    brand: "IvoryCharm",
    color: ["black"],
    size: ["L", "XL"],
    stock: 4,
    category: "Watch",
  },
  {
    id: 12,
    image: "/images/products/games/11.png",
    title: "Pastel Peach Bridal Set",
    price: 405,
    discount: 10,
    rating: 4.7,
    url: "pastel-peach-bridal-set",
    brand: "ZariLux",
    color: ["Black"],
    size: ["S", "M", "L"],
    stock: 9,
    category: "Games",
  },
  {
    id: 13,
    image: "/images/products/games/1.png",
    title: "Champagne Designer Lehenga",
    price: 459,
    discount: 10,
    rating: 4.6,
    url: "champagne-designer-lehenga",
    brand: "ChampagneCharm",
    color: ["White"],
    size: ["M", "L", "XL"],
    stock: 10,
    category: "Watch",
  },
  {
    id: 14,
    image: "/images/products/games/13.png",
    title: "Satin Rose Embroidered Dress",
    price: 477,
    discount: 10,
    rating: 4.9,
    url: "satin-rose-embroidered-dress",
    brand: "ChampagneCharm",
    color: ["Red", "Pink"],
    size: ["S", "M"],
    stock: 6,
    category: "Games",
  },
  {
    id: 15,
    image: "/images/products/games/14.png",
    title: "Designer Net Bridal Lehenga",
    price: 495,
    discount: 10,
    rating: 5.0,
    url: "designer-net-bridal-lehenga",
    brand: "ChampagneCharm",
    color: ["White", "Silver"],
    size: ["M", "L", "XL"],
    stock: 7,
    category: "Games",
  },
];

export default function ShopPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const minPrice = Math.min(...products.map((p) => p.price));
  const maxPrice = Math.max(...products.map((p) => p.price));
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12); // Dynamic products per page
  const [sortBy, setSortBy] = useState("default"); // Sorting state

  // Available options for products per page
  const productsPerPageOptions = [12, 18, 20, 25];

  // Pagination settings
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Dynamically extract filter options from products
  const categories = [
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];
  const brands = [...new Set(products.map((p) => p.brand).filter(Boolean))];
  const colors = [...new Set(products.flatMap((p) => p.color).filter(Boolean))];
  const sizes = [...new Set(products.flatMap((p) => p.size).filter(Boolean))];
  const availabilityOptions = ["In Stock", "Low Stock", "Out of Stock"];

  // Function to determine availability status based on stock
  const getAvailabilityStatus = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock >= 1 && stock <= 5) return "Low Stock";
    return "In Stock";
  };

  // Load filters, page, products per page, and sort from URL on mount
  useEffect(() => {
    const filter = searchParams.get("filter")?.split(",").filter(Boolean) || [];
    const price = searchParams.get("price")?.split("-").map(Number) || [
      minPrice,
      maxPrice,
    ];
    const page = Number(searchParams.get("page")) || 1;
    const perPage = Number(searchParams.get("perPage")) || 12;
    const sort = searchParams.get("sort") || "default";

    setSelectedCategories(filter.filter((id) => categories.includes(id)));
    setSelectedBrands(filter.filter((id) => brands.includes(id)));
    setSelectedColors(filter.filter((id) => colors.includes(id)));
    setSelectedSizes(filter.filter((id) => sizes.includes(id)));
    setSelectedAvailability(
      filter.filter((id) => availabilityOptions.includes(id))
    );
    setPriceRange(price.length === 2 ? price : [minPrice, maxPrice]);
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    setProductsPerPage(productsPerPageOptions.includes(perPage) ? perPage : 12);
    setSortBy(
      ["default", "high-to-low", "low-to-high"].includes(sort)
        ? sort
        : "default"
    );
  }, [searchParams]);

  // Update URL when filters, page, products per page, or sort change
  useEffect(() => {
    const params = new URLSearchParams();
    const allFilters = [
      ...selectedCategories,
      ...selectedBrands,
      ...selectedColors,
      ...selectedSizes,
      ...selectedAvailability,
    ];

    if (allFilters.length > 0) {
      params.set("filter", allFilters.join(","));
    }
    if (priceRange[0] !== minPrice || priceRange[1] !== maxPrice) {
      params.set("price", `${priceRange[0]}-${priceRange[1]}`);
    }
    if (currentPage !== 1) {
      params.set("page", currentPage);
    }
    if (productsPerPage !== 12) {
      params.set("perPage", productsPerPage);
    }
    if (sortBy !== "default") {
      params.set("sort", sortBy);
    }

    router.push(`/shop?${params.toString()}`, { scroll: false });
  }, [
    selectedCategories,
    selectedBrands,
    selectedColors,
    selectedSizes,
    selectedAvailability,
    priceRange,
    currentPage,
    productsPerPage,
    sortBy,
    router,
  ]);

  // Handle filter changes
  const handleFilterChange = (value, setFilter) => {
    setFilter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
    setCurrentPage(1);
  };

  // Handle price range change
  const handlePriceChange = (e, index) => {
    const value = Number(e.target.value) || 0;
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      if (index === 0 && value > newRange[1]) {
        newRange[1] = value;
      } else if (index === 1 && value < newRange[0]) {
        newRange[0] = value;
      }
      return newRange;
    });
    setCurrentPage(1);
  };

  // Handle products per page change
  const handleProductsPerPageChange = (e) => {
    const newPerPage = Number(e.target.value);
    setProductsPerPage(newPerPage);
    setCurrentPage(1);
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  // Handle page change with delayed scroll
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const brandMatch =
        selectedBrands.length === 0 ||
        !product.brand ||
        selectedBrands.includes(product.brand);
      const colorMatch =
        selectedColors.length === 0 ||
        !product.color ||
        product.color.some((c) => selectedColors.includes(c));
      const sizeMatch =
        selectedSizes.length === 0 ||
        !product.size ||
        product.size.some((s) => selectedSizes.includes(s));
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const availabilityMatch =
        selectedAvailability.length === 0 ||
        selectedAvailability.includes(getAvailabilityStatus(product.stock));
      return (
        categoryMatch &&
        brandMatch &&
        colorMatch &&
        sizeMatch &&
        priceMatch &&
        availabilityMatch
      );
    })
    .sort((a, b) => {
      if (sortBy === "high-to-low") {
        return b.price - a.price;
      } else if (sortBy === "low-to-high") {
        return a.price - b.price;
      }
      return 0; // Default: no sorting
    });

  // Paginate filtered products
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  const filteredTotalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  return (
    <div className="container mx-auto px-4 pb-24 flex gap-5">
      {/* Sidebar Filters */}
      <div className="w-[325px] h-fit">
        {/* Price Range Filter */}
        <div className="w-full relative space-y-4 mb-4 border rounded-md">
          <h3 className="text-[#000] font-semibold p-3 border-b">
            Price Range
          </h3>
          <div className="px-4 py-2 space-y-6">
            <div className="relative w-full h-2">
              <div className="absolute w-full h-2 bg-gray-200 rounded"></div>
              <div
                className="absolute h-2 bg-[#0068c8] rounded"
                style={{
                  left: `${
                    ((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100
                  }%`,
                  width: `${
                    ((priceRange[1] - priceRange[0]) / (maxPrice - minPrice)) *
                    100
                  }%`,
                }}
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="absolute w-full h-2 appearance-none bg-transparent outline-none pointer-events-auto"
                style={{ zIndex: 2 }}
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="absolute w-full h-2 appearance-none bg-transparent outline-none pointer-events-auto"
                style={{ zIndex: 2 }}
              />
            </div>
            {products.some((p) => p.price) && (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  placeholder={minPrice.toString()}
                  className="w-full p-1 border outline-none rounded-md text-center"
                />
                <span>-</span>
                <input
                  type="text"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  placeholder={maxPrice.toString()}
                  className="w-full p-1 border outline-none rounded-md text-center"
                />
              </div>
            )}
          </div>
        </div>

        {/* Accordion for Filters */}
        <Accordion
          defaultValue="availability"
          type="single"
          collapsible
          className="w-full space-y-2"
        >
          {/* Availability Filter */}
          {products.some((p) => p.stock !== undefined) && (
            <AccordionItem value="availability" className="border rounded-md">
              <AccordionTrigger className="text-[#000] font-semibold p-3 [&[data-state=open]]:border-b">
                AVAILABILITY
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                {availabilityOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center mb-2 text-[#605F5F] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAvailability.includes(option)}
                      onChange={() =>
                        handleFilterChange(option, setSelectedAvailability)
                      }
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Category Filter */}
          {categories.length > 0 && (
            <AccordionItem value="categories" className="border rounded-md">
              <AccordionTrigger className="text-[#000] font-semibold p-3 [&[data-state=open]]:border-b">
                CATEGORIES
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center mb-2 text-[#605F5F] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() =>
                        handleFilterChange(category, setSelectedCategories)
                      }
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Brand Filter */}
          {brands.length > 0 && (
            <AccordionItem value="brands" className="border rounded-md">
              <AccordionTrigger className="text-[#000] font-semibold p-3 [&[data-state=open]]:border-b">
                BRANDS
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                {brands.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center mb-2 text-[#605F5F] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() =>
                        handleFilterChange(brand, setSelectedBrands)
                      }
                      className="mr-2"
                    />
                    {brand}
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Color Filter */}
          {colors.length > 0 && (
            <AccordionItem value="colors" className="border rounded-md">
              <AccordionTrigger className="text-[#000] font-semibold p-3 [&[data-state=open]]:border-b">
                COLORS
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                {colors.map((color) => (
                  <label
                    key={color}
                    className="flex items-center mb-2 text-[#605F5F] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() =>
                        handleFilterChange(color, setSelectedColors)
                      }
                      className="mr-2"
                    />
                    {color}
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Size Filter */}
          {sizes.length > 0 && (
            <AccordionItem value="sizes" className="border rounded-md">
              <AccordionTrigger className="text-[#000] font-semibold p-3 [&[data-state=open]]:border-b">
                SIZES
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                {sizes.map((size) => (
                  <label
                    key={size}
                    className="flex items-center mb-2 text-[#605F5F] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() =>
                        handleFilterChange(size, setSelectedSizes)
                      }
                      className="mr-2"
                    />
                    {size}
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </div>

      {/* Product Grid */}
      <div className="space-y-4 w-full h-fit">
        <div className="flex justify-between items-center border rounded-md p-2.5">
          <h1 className="text-xl font-semibold">Page</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show:</span>
              <select
                value={productsPerPage}
                onChange={handleProductsPerPageChange}
                className="p-1 border rounded-md text-sm"
              >
                {productsPerPageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort By:</span>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="p-1 border rounded-md text-sm"
              >
                <option value="default">Default</option>
                <option value="high-to-low">Price: High to Low</option>
                <option value="low-to-high">Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="grid grid-cols-4 gap-5">
            {paginatedProducts.map((product) => (
              <ColumnCart cartData={product} key={product?.id} />
            ))}
          </div>

          {/* Pagination */}
          {filteredTotalPages > 1 && (
            <div className="flex justify-center mt-8">
              <nav className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
                >
                  Previous
                </button>
                {Array.from(
                  { length: filteredTotalPages },
                  (_, i) => i + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded cursor-pointer transition-all duration-200 text-white ${
                      currentPage === page
                        ? "bg-[#0068c8]"
                        : "bg-[#0067c88d] hover:bg-[#0068c8]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === filteredTotalPages}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
