import React from "react";

type Props = {
  userID: string;
};

const UserID = (props: Props) => {
  return <p className="text-base opacity-50">{props.userID}</p>;
};

export default UserID;
