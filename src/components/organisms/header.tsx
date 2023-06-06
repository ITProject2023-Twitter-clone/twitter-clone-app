import React from "react";
import HeaderTtile from "../atoms/headerTtile";
import HeaderSwitch from "../molecules/headerSwitch";

const Header = () => {
  return (
    <div className="w-5/12 fixed z-10 bg-neutral bg-opacity-60">
      <div className="flex h-14 items-center border-b pl-12">
        <HeaderTtile title="Home" />
      </div>
      <HeaderSwitch />
    </div>
  );
};

export default Header;
