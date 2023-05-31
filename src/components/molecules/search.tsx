import React from "react";
import SearchInput from "../atoms/searchInput";
import SearchButton from "../atoms/searchButton";

const Search = () => {
  return (
    <div className="w-80">
      <SearchInput />
      <div className="w-40 mt-5 ml-auto mr-3">
        <SearchButton />
      </div>
    </div>
  );
};

export default Search;
