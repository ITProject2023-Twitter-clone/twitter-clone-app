import React from "react";

type Props = {
  count: number;
};

const TweetCount = (props: Props) => {
  return (
    <div>
      <p>{props.count}</p>
      <p>tweets</p>
      {/* 0か1だった場合、tweetになる */}
    </div>
  );
};

export default TweetCount;
