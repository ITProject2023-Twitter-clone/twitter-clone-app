import Image from "next/image";
import React from "react";

type ActionType = "comment" | "retweet" | "likes" | "share";
type PageType = "tweet" | "tweetDetail"

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
    case "comment": {
      return COMMENT;
    }
    case "retweet": {
      return RETWEET;
    }
    case "likes": {
      return LIKES;
    }
    case "share": {
      return SHARE;
    }
    default: {
      return "";
    }
  }
};

const TweetActionButton = (props: Props) => {
  const actionClass = getActionClass(props.action);
  
  return (
    <button className="flex items-center">
      <Image src={`${actionClass}`} alt="tweetButton" width={17} height={17} />
      <p className="pl-2">
        {props.action === "share" ? "" : props.count}
      </p>
    </button>
  );
};
export default TweetActionButton;