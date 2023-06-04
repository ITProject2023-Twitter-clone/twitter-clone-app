import React from "react";
import SwitchElement from "../atoms/switchElement";

const Switch = () => {
  return (
    <div className="flex">
      <SwitchElement pageName="Everyone" />
      <SwitchElement pageName="Following" />
    </div>
  );
};

export default Switch;
