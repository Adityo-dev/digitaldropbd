import Image from "next/image";

const Banner1 = () => (
  <div className="bg-[#EEE0E0] rounded-lg overflow-hidden h-[500px]">
    <Image
      src="/banner1.png"
      alt="Hero Image"
      width={1200}
      height={500}
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>
);

const Banner2 = () => (
  <div className="bg-[#D8D9EB] rounded-lg overflow-hidden h-[500px]">
    <Image
      src="/banner2.jpg"
      alt="Hero Image"
      width={1200}
      height={500}
      className="w-full h-full rounded-lg object-cover"
    />
  </div>
);

const ProductBanner1 = () => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-3 gap-5">
      <div className="col-span-2">
        <Banner1 />
      </div>
      <div className="col-span-1">
        <Banner2 />
      </div>
    </div>
  );
};

export default ProductBanner1;
