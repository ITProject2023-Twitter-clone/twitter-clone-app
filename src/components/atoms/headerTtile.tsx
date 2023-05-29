import React from "react";

type Props = {
  title: string;
};

const HeaderTtile = (props: Props) => {
  return <p className="text-lg font-bold">{props.title}</p>;
};
export default HeaderTtile;
