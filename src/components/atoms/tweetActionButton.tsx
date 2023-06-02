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



// const togleHTMLDisplay = (page: PageType, action: ActionType, count: number) => {
//   switch (page) {
//     case "TweetDetail": {
//         const actionClass = getActionClass(action);
//         return (
//           <button className="w-[29px] flex">
//             <Image src={`${actionClass}`} alt="tweettButton" width={29} height={29} />
//           </button>
//       )
//     }
//     default: {
//       if(action === "Share") {
//         const actionClass = getActionClass(action);
//         return (
//           <button className="w-[58px] flex">
//             <Image src={`${actionClass}`} alt="tweettButton" width={22} height={22} />
//           </button>
//         )
//       } else {
//         const actionClass = getActionClass(action);
//         return (
//           <button className="w-[58px] flex">
//             <Image src={`${actionClass}`} alt="tweettButton" width={22} height={22} />
//             <p className="ml-2 text-base h-5 bottom-[3px] relative text-lightGray">{count}</p>
//           </button>
//       )
//       }
//     }
//   }

const ActionButton = (props: Props) => {
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
export default ActionButton;