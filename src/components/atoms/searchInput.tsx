import React from "react";
import Search from "@/public/search.svg";
import Image from "next/image";

const SearchInput = () => {
  return (
    <div className="input input-bordered input-primary w-full max-w-xs flex rounded-full bg-primary bg-opacity-20">
        <Image src={Search} width={24} height={24} alt="search" className="" />
      <input type="text" placeholder="Search..." className="bg-transparent placeholder:text-[#B5CDF480] ml-2 outline-none w-72" />
    </div>
  );
};

export default SearchInput;
