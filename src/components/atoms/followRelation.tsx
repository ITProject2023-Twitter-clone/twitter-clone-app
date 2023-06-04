import React from "react";

type Relation = "follow" | "follower"
type Props = {
  count: number;
  relation: Relation;
};

const FollowRelation = (props: Props) => {
  return (
    <div className="flex cursor-pointer">
      <p className="text-base font-bold">{props.count}</p>
      <p className="text-base text-lightGray opacity-50 ml-1">{props.relation}</p>
    </div>
  );
};

export default FollowRelation;
