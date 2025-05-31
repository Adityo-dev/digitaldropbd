function ProductInfo({ productDetail }) {
  return (
    <div className="mt-24">
      <h2 className="text-2xl font-semibold mb-2 uppercase">Description</h2>
      <p className="text-base">{productDetail?.description}</p>

      <h2 className="text-2xl font-semibold mb-2 mt-6 uppercase">
        Specifications
      </h2>
      <ul>
        {productDetail?.specifications?.map((spec, index) => (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: spec }}
            className="pt-1.5"
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductInfo;
