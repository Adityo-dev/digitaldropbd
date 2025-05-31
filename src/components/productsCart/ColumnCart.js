import Image from "next/image";
import Link from "next/link";
// import CartButton from "../cartBtn";

const ColumnCart = ({ cartData }) => {
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
  } = cartData;

  return (
    <main className="relative w-full max-h-[350px] h-full flex flex-col justify-between bg-[#f4f4f4] p-[10px_20px_20px_20px] rounded-[10px] group hover:[&_.cartButton]:opacity-100 hover:[&_.cartButton]:transform-none">
      <div>
        <Link href={`/product/${cartData?.title}`}>
          <div className="w-full max-w-[230px] h-[220px] relative">
            <Image
              className={`w-full h-full object-cover ${
                soldOut ? "opacity-50" : ""
              }`}
              src={image}
              alt={"product"}
              fill
            />
          </div>
        </Link>

        <div>
          {soldOut ? (
            <p className="absolute top-[20px] left-[17px] flex justify-center w-[70px] px-[10px] py-[1.5px] text-[0.7rem] bg-[#868686] text-white rounded-tl-none rounded-[0_5px_5px_5px] whitespace-nowrap">
              Sold Out
            </p>
          ) : (
            <div className="absolute flex flex-col gap-1 top-[20px] left-[17px]">
              {discount > 0 && (
                <p className="flex justify-center w-[45px] px-[10px] py-[1.5px] text-[0.7rem] bg-[#0068c8] text-white rounded-tl-none rounded-[0_5px_5px_5px] whitespace-nowrap">
                  -{discount}%
                </p>
              )}
              {hot && (
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
          href={url}
          className="text-[0.9rem] font-semibold text-[#848484] capitalize transition-all duration-300 hover:text-[#0068c8]"
        >
          {name}
        </Link>
        <Link
          href={`#`}
          className="text-[1rem] leading-6 line-clamp-2 transition-all duration-300 hover:text-[#0068c8] capitalize"
        >
          {title}
        </Link>
        <p className="flex items-center gap-2">
          {currentPrice && (
            <span className="text-red-600 font-bold">${currentPrice}</span>
          )}
          {oldPrice && (
            <del className="text-[#848484] font-light">${oldPrice}</del>
          )}
        </p>
      </div>

      {/* <div className="cartButton absolute right-[15px] top-[20px] opacity-0 transition-all duration-500 md:opacity-100">
        <CartButton cartData={cartData} />
      </div> */}
    </main>
  );
};

export default ColumnCart;
