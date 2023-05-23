import React from "react";

type Props = {
  bio: string;
};

const Bio = (props: Props) => {
  return <p className="text-base">{props.bio}</p>;
};

export default Bio;
