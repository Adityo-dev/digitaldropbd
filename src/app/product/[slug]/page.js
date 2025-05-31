import ProductDetails from "@/components/modules/productSinglePage/ProductDetails";
import ProductImages from "@/components/modules/productSinglePage/ProductImages";

const mockProductData = {
  id: 1,
  name: "Sample Games",
  retail_price: 1000,
  discount: 20,
  thumbnail: "/images/products/games/0.png",
  category: { name: "Games" },
  brand: { name: "Sample Brand" },
  sku: "TSHIRT123",
  Review: [{}, {}, {}],
  variations: [
    {
      id: 1,
      color: "Red",
      size: "M",
      stock: 10,
      img: "/images/products/games/0.png",
    },
    {
      id: 2,
      color: "Red",
      size: "L",
      stock: 5,
      img: "/images/products/games/1.png",
    },
    {
      id: 3,
      color: "Red",
      size: "L",
      stock: 0,
      img: "/images/products/games/2.png",
    },
  ],
};

export default function Product() {
  return (
    <section className="container mx-auto px-4 grid grid-cols-12 gap-5">
      <div className="col-span-12 md:col-span-5">
        <ProductImages data={mockProductData.variations} />
      </div>
      <div className="col-span-12 md:col-span-7">
        <ProductDetails productDetails={mockProductData} />
      </div>
    </section>
  );
}
