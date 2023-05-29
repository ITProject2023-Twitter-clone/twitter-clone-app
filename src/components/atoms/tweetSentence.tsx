import React from "react";

type Props = {
  sentence: string;
};

const TweetSentence = (props: Props) => {
  return (
    //一旦じっと.max-w-とmin-w-のジット以外のあれなに？
    <div className="w-[600px] break-words">
      <p className="">{props.sentence}</p>
    </div>
  );
};

export default TweetSentence;
