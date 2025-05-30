// import DynamicRating from "@/components/rating";
import Image from "next/image";
import Link from "next/link";

const RowCart = ({ cartData }) => {
  const {
    image,
    name,
    title,
    currentPrice,
    oldPrice,
    discount,
    soldOut,
    hot,
    url,
    rating,
  } = cartData;

  return (
    <div className="overflow-hidden relative flex gap-2 items-center bg-[#f4f4f4] rounded-[10px]  cursor-pointer p-1.5">
      <div className="relative">
        <Link href={`/shop/${cartData?.title}`}>
          <Image
            className={`relative max-w-[200px] h-[200px] object-cover ${
              soldOut ? "opacity-30" : ""
            }`}
            src={image}
            alt={name}
            width={200}
            height={200}
          />
        </Link>
        <div>
          {soldOut ? (
            <p className="absolute top-[20px] left-[17px] flex justify-center w-[70px] px-[10px] py-[1.5px] text-[0.7rem] bg-[#868686] text-white rounded-tl-none rounded-[0_5px_5px_5px]">
              Sold Out
            </p>
          ) : (
            <div className="absolute flex flex-col gap-1 top-[12px] left-[5px]">
              {discount && (
                <p className="flex justify-center w-[45px] px-[10px] py-[1.5px] text-[0.7rem] bg-[#0068c8] text-white rounded-tl-none rounded-[0_5px_5px_5px] md:w-[40px] md:text-[0.6rem]">
                  -{discount}%
                </p>
              )}
              {hot && (
                <p className="flex justify-center w-[40px] px-[10px] py-[1.5px] text-[0.7rem] bg-[#dd2831] text-white rounded-tl-none rounded-[0_5px_5px_5px]">
                  Hot
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-[10px]">
        <Link
          href={url}
          className="text-[0.9rem] text-[#848484] capitalize transition-all duration-300 hover:text-[#0068c8] md:text-[0.7rem] lg:text-[0.9rem]"
        >
          {name}
        </Link>
        <Link
          href={`/shop/${title}`}
          className="text-[1rem] text-black leading-6 transition-all duration-300 hover:text-[#0068c8] md:text-[0.95rem] lg:text-[1rem] capitalize"
        >
          {title}
        </Link>
        {/* <DynamicRating rating={rating} /> */}
        <div className="flex items-center gap-2 md:gap-[10px]">
          {currentPrice && (
            <span className="text-red-600 font-bold text-[0.82rem] md:text-[0.9rem] lg:text-[1rem]">
              ${currentPrice}
            </span>
          )}
          {oldPrice && (
            <del className="text-[#848484] font-light text-[0.82rem] md:text-[0.9rem] lg:text-[1rem]">
              ${oldPrice}
            </del>
          )}
        </div>
      </div>
    </div>
  );
};

export default RowCart;
