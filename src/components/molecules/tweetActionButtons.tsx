import React from "react";
import TweetActionButton from "../atoms/tweetActionButton";


type Props = {
  pageType: "tweet" | "tweetDetail"
  count?: number
}
const TweeetActionButtons = (props: Props) => {
  return (
    <div className="flex w-full items-center justify-between">
      <TweetActionButton pageType={props.pageType} actionType="comment" count={props.count} />
      <TweetActionButton pageType={props.pageType} actionType="retweet" count={props.count} />
      <TweetActionButton pageType={props.pageType} actionType="like" count={props.count} />
      <TweetActionButton pageType={props.pageType} actionType="share" />
    </div>
  );
};

export default TweeetActionButtons;
