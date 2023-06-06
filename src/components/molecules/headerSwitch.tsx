import React from "react";
import SwitchElement from "../atoms/switchElement";

const Switch = () => {
  return (
    <div className="flex border-b w-full">
      <div className="w-full border-r">
        <SwitchElement pageName="Everyone" />
      </div>
      <SwitchElement pageName="Following" />
    </div>
  );
};

export default Switch;
