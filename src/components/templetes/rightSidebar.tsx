import React from "react";
import Search from "../molecules/search";
import ThemeChangeButtons from "../molecules/themeChangeButtons";

const RightSidebar = () => {
  return (
    <div className="h-full w-full flex">
      <div className="ml-12 pt-10">
        <Search />
      </div>
      <div className="ml-auto mr-10 mt-auto w-fit mb-6">
        <ThemeChangeButtons />
      </div>
    </div>
  );
};

export default RightSidebar;
