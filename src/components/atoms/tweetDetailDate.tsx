import React from "react";

type Props = {
  formatedDate: string;
  time: string;
};

const TweetDetailDate = (props: Props) => {
  return (
    <div>
      <p>{props.time}</p>
      <p>{props.formatedDate}</p>
    </div>
  );
};

export default TweetDetailDate;
