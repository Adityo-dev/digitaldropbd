// import DynamicRating from "@/components/rating";
import Image from "next/image";
import Link from "next/link";

const RowCart = ({ cartData }) => {
  return (
    <div className="overflow-hidden relative flex gap-2 items-center bg-[#f4f4f4] rounded-[10px]  cursor-pointer p-1.5">
      <div className="relative">
        <Link href={`/product/${cartData?.id}`}>
          <Image
            className={`relative max-w-[200px] h-[200px] object-cover ${
              cartData?.stock === 0 ? "opacity-30" : null
            }`}
            src={cartData?.thumbnail}
            alt={cartData?.title}
            width={200}
            height={200}
          />
        </Link>
        <div>
          {cartData?.stock === 0 ? (
            <p className="absolute top-[20px] left-[17px] flex justify-center w-[70px] px-[10px] py-[1.5px] text-[0.7rem] bg-[#868686] text-white rounded-tl-none rounded-[0_5px_5px_5px]">
              Sold Out
            </p>
          ) : (
            <div className="absolute flex flex-col gap-1 top-[12px] left-[5px]">
              {cartData?.discount && (
                <p className="flex justify-center w-[45px] px-[10px] py-[1.5px] text-[0.7rem] bg-[#0068c8] text-white rounded-tl-none rounded-[0_5px_5px_5px] md:w-[40px] md:text-[0.6rem]">
                  -{cartData?.discount}%
                </p>
              )}
              {cartData?.hot && (
                <p className="flex justify-center w-[40px] px-[10px] py-[1.5px] text-[0.7rem] bg-[#dd2831] text-white rounded-tl-none rounded-[0_5px_5px_5px]">
                  Hot
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-3">
        <Link
          href={`/shop?filter=${cartData?.category}`}
          className="text-sm text-[#848484] capitalize transition-all duration-300 hover:text-[#0068c8] "
        >
          {cartData?.category}
        </Link>
        <Link
          href={`/shop/${cartData?.title}`}
          className="text-base text-black leading-6 transition-all duration-300 hover:text-[#0068c8] capitalize"
        >
          <p>{cartData?.title}</p>
        </Link>
        {/* <DynamicRating rating={rating} /> */}
        <div className="flex items-center gap-2 md:gap-[10px]">
          {cartData?.price && cartData?.discount && (
            <span className="text-red-600 font-bold text-lg">
              $
              {Math.round(
                cartData.price - (cartData?.price * cartData?.discount) / 100
              )}
            </span>
          )}
          {cartData?.price && (
            <del className="text-[#848484] font-light">${cartData?.price}</del>
          )}
        </div>
      </div>
    </div>
  );
};

export default RowCart;
