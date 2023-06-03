import Image from "next/image";
import React from "react";

type ActionType = "Comment" | "Retweet" | "Likes" | "Share";
type PageType = "Tweet" | "TweetDetail"

type Props = {
  page: PageType;
  action: ActionType;
  count?: number;
};

const COMMENT = "/comment.svg"
const RETWEET = "/retweet.svg"
const LIKES = "/likes.svg"
const SHARE = "/share.svg"

const getActionClass = (action: ActionType): string => {
  switch (action) {
    case "Comment": {
      return COMMENT;
    }
    case "Retweet": {
      return RETWEET;
    }
    case "Likes": {
      return LIKES;
    }
    case "Share": {
      return SHARE;
    }
    default: {
      return "";
    }
  }
};

const TweetActionButton = (props: Props) => {
  const actionClass = getActionClass(props.action);
  const getCount = (count: number | undefined) => {
    switch (props.action) {
      case "Share": {
        return "";
      }
      default: {
        return count;
      }
    }
  };
  return (
    <button className="flex items-center">
      <Image src={`${actionClass}`} alt="tweetButton" width={17} height={17} />
      <p className="pl-2">
        {getCount(props.count)}
      </p>
    </button>
  );
};
export default TweetActionButton;