import React from "react";

type Props = {
  formatedDate: string;
  time: string;
};

const TweetDetailDate = (props: Props) => {
  return (
    <div className="flex opacity-50">
      <p>{props.time}</p>
      <p>・</p>
      <p>{props.formatedDate}</p>
    </div>
  );
};

export default TweetDetailDate;
