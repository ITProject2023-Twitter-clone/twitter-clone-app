import React from "react";
import SwitchButton from "../atoms/switchButton";

const Switch = () => {
  return (
    <div className="flex">
      <SwitchButton switch="Everyone" />
      <SwitchButton switch="Following" />
    </div>
  );
};

export default Switch;
