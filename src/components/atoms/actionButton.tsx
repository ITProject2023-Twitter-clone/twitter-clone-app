import Image from "next/image";
import React from "react";

type ActionType = "Comment" | "Retweet" | "Likes" | "Share";
type PageType = "Tweet" | "TweetDetail"

type Props = {
  page: PageType;
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

const togleHTMLDisplay = (page: PageType, action: ActionType, count: number) => {
  switch (page) {
    case "TweetDetail": {
        const actionClass = getActionClass(action);
        return (
          <button className="w-[29px] flex">
            <Image src={`${actionClass}`} alt="tweettButton" width={29} height={29} />
          </button>
      )
    }
    default: {
      if(action === "Share") {
        const actionClass = getActionClass(action);
        return (
          <button className="w-[58px] flex">
            <Image src={`${actionClass}`} alt="tweettButton" width={22} height={22} />
          </button>
        )
      } else {
        const actionClass = getActionClass(action);
        return (
          <button className="w-[58px] flex">
            <Image src={`${actionClass}`} alt="tweettButton" width={22} height={22} />
            <p className="ml-2 text-base h-5 bottom-[3px] relative text-lightGray">{count}</p>
          </button>
      )
      }
    }
  }
}



const ActionButton = (props: Props) => {
  const actionClass = getActionClass(props.action);
  return (
    togleHTMLDisplay(props.page, props.action, props.count)
  );
};
export default ActionButton;
