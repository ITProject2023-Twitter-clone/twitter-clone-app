import React from "react";

type Props = {
  switch: string;
};

const SwitchButton = (props: Props) => {
  return <button>{props.switch}</button>;
};

export default SwitchButton;
