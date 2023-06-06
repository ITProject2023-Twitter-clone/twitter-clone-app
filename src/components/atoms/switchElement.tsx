import React from "react";

type Props = {
  pageName: string;
};

const SwitchElement = (props: Props) => {
  return <button className="font-bold text-base w-full h-11">{props.pageName}</button>;
};

export default SwitchElement;
