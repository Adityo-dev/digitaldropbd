import Image from "next/image";
import Link from "next/link";
// import CartButton from "../cartBtn";

const ColumnCart = ({ cartData }) => {
  return (
    <main className="relative w-full max-h-[350px] h-full flex flex-col justify-between bg-[#f4f4f4] p-[10px_20px_20px_20px] rounded-[10px] group hover:[&_.cartButton]:opacity-100 hover:[&_.cartButton]:transform-none">
      <div>
        <Link href={`/product/${cartData?.id}`}>
          <div className="w-full max-w-[230px] h-[220px] relative">
            <Image
              className={`w-full h-full object-cover ${
                cartData?.stock === 0 ? "opacity-50" : ""
              }`}
              src={cartData?.thumbnail}
              alt={"product"}
              fill
            />
          </div>
        </Link>

        <div>
          {cartData?.stock === 0 ? (
            <p className="absolute top-[20px] left-[17px] flex justify-center w-[70px] px-[10px] py-[1.5px] text-[0.7rem] bg-[#868686] text-white rounded-tl-none rounded-[0_5px_5px_5px] whitespace-nowrap">
              Sold Out
            </p>
          ) : (
            <div className="absolute flex flex-col gap-1 top-[20px] left-[17px]">
              {cartData?.discount > 0 && (
                <p className="flex justify-center w-[45px] px-[10px] py-[1.5px] text-[0.7rem] bg-[#0068c8] text-white rounded-tl-none rounded-[0_5px_5px_5px] whitespace-nowrap">
                  -{cartData?.discount}%
                </p>
              )}
              {cartData?.hot && (
                <p className="flex justify-center w-[40px] px-[10px] py-[1.5px] text-[0.7rem] bg-[#dd2831] text-white rounded-tl-none rounded-[0_5px_5px_5px] whitespace-nowrap">
                  Hot
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Link
          href={`/shop?filter=${cartData?.category}`}
          className="text-[0.9rem] font-semibold text-[#848484] capitalize transition-all duration-300 hover:text-[#0068c8]"
        >
          {cartData?.category}
        </Link>
        <Link
          href={`#`}
          className="text-[1rem] leading-6 line-clamp-2 transition-all duration-300 hover:text-[#0068c8] capitalize"
        >
          {cartData?.title}
        </Link>
        <p className="flex items-center gap-2">
          {cartData?.price && cartData?.discount && (
            <span className="text-red-600 text-lg font-bold">
              $
              {Math.round(
                cartData.price - (cartData?.price * cartData?.discount) / 100
              )}
            </span>
          )}
          {cartData?.price && (
            <del className="text-[#848484] font-light">${cartData?.price}</del>
          )}
        </p>
      </div>
    </main>
  );
};

export default ColumnCart;
