import React from "react";

type Props = {
  userId: string;
};

const UserId = (props: Props) => {
  return <p className="text-base opacity-50">@{props.userId}</p>;
};

export default UserId;
