import Image from "next/image";
import React from "react";

type ActionType = "Comment" | "Retweet" | "Likes" | "Share";

type Props = {
  src: ActionType;
};

const getActionClass = (src: ActionType): string => {
  switch (src) {
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
  const actionClass = getActionClass(props.src);
  return (
    <button className="my-2 flex w-[180px] justify-between">
      <Image src={`${actionClass}`} alt="tweettButton" width={17} height={17} />
    </button>
  );
};

export default ActionButton;
