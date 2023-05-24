import React from "react";

type Props = {
  title: string;
};

const HeaderTtile = (props: Props) => {
  return <p>{props.title}</p>;
};
export default HeaderTtile;
