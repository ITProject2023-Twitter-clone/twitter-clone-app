import Image from "next/image";
import React from "react";

type ActionType = "Comment" | "Retweet" | "Likes" | "Share";

type Props = {
  action: ActionType;
  count: number;
};

const getActionClass = (action: ActionType): string => {
  switch (action) {
    case "Comment": {
      return "/comment-blank-svgrepo-com.svg";
    }
    case "Retweet": {
      return "/retweet-svgrepo-com.svg";
    }
    case "Likes": {
      return "/twitter-svgrepo-com.svg";
    }
    case "Share": {
      return "/share-box-svgrepo-com.svg";
    }
    default: {
      return "";
    }
  }
};

const ActionButton = (props: Props) => {
  const actionClass = getActionClass(props.action);
  return (
    <button className="">
      <Image src={`${actionClass}`} alt="tweettButton" width={17} height={17} />
      <p>{props.count}</p>
    </button>
  );
};
export default ActionButton;
