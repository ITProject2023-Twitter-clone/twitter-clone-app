import React from "react";
import TweetInfo from "../molecules/tweetInfo";
import Icon from "../atoms/icon";
import TweetSentence from "../atoms/tweetSentence";
import TweetSetting from "../molecules/tweetSetting";
import ActionButtons from "../molecules/actionButtons";

const Tweet = () => {
  return (
    <div className="flex w-fit rounded-xl p-3 px-10 bg-base-300">
      <Icon size="base" />
      <div className="ml-4 space-y-1">
        <div className="flex justify-between">
          <TweetInfo />
          <TweetSetting />
        </div>
        <TweetSentence sentence="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
        <ActionButtons />
      </div>
    </div>
  );
};

export default Tweet;
