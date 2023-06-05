import React from "react";

type Props = {
  sentence: string;
};

const TweetSentence = (props: Props) => {
  return (
    <div className="w-full break-words">
      <p>{props.sentence}</p>
    </div>
  );
};

export default TweetSentence;
