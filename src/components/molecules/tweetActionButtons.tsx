import React from "react";
import TweetActionButton from "../atoms/tweetActionButton";

const TweeetActionButtons = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <TweetActionButton pageType="tweet" actionType="comment" count={100} />
      <TweetActionButton pageType="tweet" actionType="retweet" count={100} />
      <TweetActionButton pageType="tweet" actionType="like" count={100} />
      <TweetActionButton pageType="tweet" actionType="share" />
    </div>
  );
};

export default TweeetActionButtons;
