import Image from "next/image";
import React from "react";

type Action = "comment" | "retweet" | "like" | "share";
type Page = "tweet" | "tweetDetail";

type Props = {
  pageType: Page
  actionType:  Action
  count?: number;
};

const COMMENT = "/comment.svg"
const RETWEET = "/retweet.svg"
const LIKES = "/likes.svg"
const SHARE = "/share.svg"

const getActionClass = (actionType: Action): string => {
  switch (actionType) {
    case "comment": {
      return COMMENT;
    }
    case "retweet": {
      return RETWEET;
    }
    case "like": {
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
  const actionClass = getActionClass(props.actionType);

  return (
    <button className="flex items-center">
      <Image src={`${actionClass}`} alt="tweetButton" width={17} height={17} />
      <p className="pl-2">
        {props.actionType === "share" ? "" : props.count}
      </p>
    </button>
  );
};

export default TweetActionButton;
