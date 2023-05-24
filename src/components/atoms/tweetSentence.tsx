import React from "react";

type Props = {
  sentence: string;
};

const TweetSentence = (props: Props) => {
  return <p>{props.sentence}</p>;
};

export default TweetSentence;
