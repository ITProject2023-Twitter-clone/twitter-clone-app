import React from "react";

type Props = {
  count: number;
  relation: string;
};

const FollowRelation = (props: Props) => {
  return (
    <div>
      <p className="text-base font-bold">{props.count}</p>
      <p className="text-base text-lightGray">{props.relation}</p>
    </div>
  );
};

export default FollowRelation;
