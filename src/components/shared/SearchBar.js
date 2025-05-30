// import { Search } from "lucide-react";

const SearchBar = () => (
  <div className="flex items-center w-full max-w-2xl">
    <input
      type="text"
      placeholder="Search"
      className="w-full h-12 px-4 border-2 border-[#0068c8] rounded-l-md outline-none"
    />
    <button className="bg-[#0068c8] w-auto h-12 text-white px-4 rounded-r-md border-l uppercase">
      {/* <Search size={20} /> */}search
    </button>
  </div>
);

export default SearchBar;
