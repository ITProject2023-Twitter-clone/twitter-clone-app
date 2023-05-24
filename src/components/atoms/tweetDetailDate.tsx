import React from "react";

type Props = {
  date: string;
  time: string;
};

const TweetDetailDate = (props: Props) => {
  return (
    <div>
      <p>{props.time}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default TweetDetailDate;
