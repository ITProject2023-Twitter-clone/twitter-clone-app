import React from "react";
import HeaderTtile from "../atoms/headerTtile";
import Switch from "../molecules/switch";

const Header = () => {
  return (
    //CSSあとで帰るかも、divタグが気持ち悪い
    <div className="w-full">
      <div className="flex h-14 items-center border pl-12">
        <HeaderTtile title="Home" />
      </div>
      <Switch />
    </div>
  );
};

export default Header;
