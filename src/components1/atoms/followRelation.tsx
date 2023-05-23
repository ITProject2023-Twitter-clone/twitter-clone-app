import React from "react";

type Props = {
  relation: string;
  count: number;
};

const FollowRelation = (props: Props) => {
  return (
    <p className="text-[13px] font-bold">
      <span>{props.count}</span>
      <span className="mx-[4.5px]  text-darkGray"> {props.relation}</span>
    </p>
  );
};

export default FollowRelation;
