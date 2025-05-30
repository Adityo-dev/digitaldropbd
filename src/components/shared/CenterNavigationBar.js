import Image from "next/image";
import CenterNavigationBarRightSite from "./CenterNavigationBarRightSite";
import SearchBar from "./SearchBar";
import Link from "next/link";

const CenterNavigationBar = () => {
  return (
    <nav className="container mx-auto py-4 px-6 flex items-center justify-between gap-4">
      <Link href={"/"} className="flex items-center">
        <Image
          src="/digital-drop-logo.png"
          alt="Digital Drop Logo"
          width={200}
          height={200}
          className="w-full h-[55px] rounded-lg object-contain"
        />
      </Link>
      <SearchBar />
      <CenterNavigationBarRightSite />
    </nav>
  );
};

export default CenterNavigationBar;
