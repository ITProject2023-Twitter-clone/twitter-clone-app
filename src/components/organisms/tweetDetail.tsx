import React from "react";
import Icon from "../atoms/icon";
import UserName from "../atoms/userName";
import UserId from "../atoms/userId";
import TweetSettingButton from "../atoms/tweetSettingButton";
import TweetSentence from "../atoms/tweetSentence";
import TweetDetailDate from "../atoms/tweetDetailDate";
import TweetActionCount from "../atoms/tweetActionCount";
import TweeetActionButtons from "../molecules/tweetActionButtons";

const TweetDetail = () => {
  return (
    <div className="w-[99%] rounded-xl bg-base-100 px-4 py-3">
      <div className="flex w-full">
        <div>
          <Icon />
        </div>
        <div className="flex w-full pl-3">
          <div>
            <UserName userName="VOWAC" />
            <UserId userId="VOWAC" />
          </div>
          <div className="ml-auto">
            <TweetSettingButton />
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto">
        <div className="mt-4">
          <TweetSentence
            sentence="これはツイートです。
                    ツイートの内容です。ツイートの内容です。ツイートの内容です。ツイートの内容です。
                    ツイートをしましょう。
                    そう、ツイートを。
                    ツイートをしましょう。ツイートをしましょう。ツイートをしましょう。
                    "
          />
        </div>
        <div className="mt-6">
            <TweetDetailDate time="5:57PM" formatedDate="Jan 30,2023" />
        </div>
        <div className="flex space-x-2 mt-5">
            <TweetActionCount count={10} text="Retweets" />
            <TweetActionCount count={10} text="Quotes" />
            <TweetActionCount count={10} text="Likes" />
        </div>
      </div>
      <div className="mx-20 mt-8">
        <TweeetActionButtons pageType="tweetDetail" />
      </div>
    </div>
  );
};

export default TweetDetail;
