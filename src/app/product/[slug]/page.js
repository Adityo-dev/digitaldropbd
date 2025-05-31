import ProductDetails from "@/components/modules/productSinglePage/ProductDetails";
import ProductImages from "@/components/modules/productSinglePage/ProductImages";
import ProductInfo from "@/components/modules/productSinglePage/ProductInfo";

import { ProductsData } from "@/data/ProductsData";

export default function Product({ params }) {
  const filterSingleProduct = ProductsData.find(
    (product) => product?.id === Number(params.slug)
  );

  return (
    <section className="container mx-auto px-4">
      <section className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-5">
          <ProductImages variations={filterSingleProduct?.variations} />
        </div>
        <div className="col-span-12 md:col-span-7">
          <ProductDetails productDetail={filterSingleProduct} />
        </div>
      </section>
      <ProductInfo productDetail={filterSingleProduct} />
    </section>
  );
}
