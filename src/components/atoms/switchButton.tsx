import React from "react";

type Props = {
  switch: string;
};

const SwitchButton = (props: Props) => {
  return <button className="font-bold text-base border w-full h-11">{props.switch}</button>;
};

export default SwitchButton;
