import React from "react";

type Props = {
  count: number;
};

const TweetCount = ({count}: Props) => {
  return (
    <div className="flex opacity-50">
      <p>{count}</p>
      <p>{count >= 1 ? "tweets" : "tweet"}</p>
    </div>
  );
};

export default TweetCount;
