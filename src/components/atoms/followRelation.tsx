import React from "react";

type Props = {
  relation: string;
  count: number;
}

const FollowRelation = (props:Props) => {
  return (
    <div className="flex">
      <p className="text-[13px] font-bold">{props.count}</p>
      <p className="mx-[4.5px] text-[13px]  text-darkGray">{props.relation}</p>
    </div>
  );
};

export default FollowRelation;
