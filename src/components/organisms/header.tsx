import React from "react";
import HeaderTtile from "../atoms/headerTtile";
import HeaderSwitch from "../molecules/headerSwitch";

const Header = () => {
  return (
    //CSSあとで帰るかも、divタグが気持ち悪い
    <div className="w-full">
      <div className="flex h-14 items-center border pl-12">
        <HeaderTtile title="Home" />
      </div>
      <HeaderSwitch />
    </div>
  );
};

export default Header;
