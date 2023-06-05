import React from "react";
import TweetInfo from "../molecules/tweetInfo";
import Icon from "../atoms/icon";
import TweetSentence from "../atoms/tweetSentence";
import TweetSetting from "../molecules/tweetSetting";
import ActionButtons from "../molecules/tweetActionButtons";

const Tweet = () => {
  return (
    <div className="flex w-full space-y-1 rounded-xl bg-base-300 p-4 ">
      <div className="absolute">
        <Icon size="base" />
      </div>

      <div className="w-full pl-20">
        <div className="flex w-full justify-between">
          <TweetInfo />
          <TweetSetting />
        </div>
        <div className="pl-3 pr-10 pt-5">
          <TweetSentence
            sentence="これはツイートです。
                      ツイートの内容です。ツイートの内容です。ツイートの内容です。ツイートの内容です。
                      ツイートをしましょう。
                      そう、ツイートを。
                      そう、ツイートを。
                      そう、ツイートを。" />
        </div>
        <div className="mt-8">
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
