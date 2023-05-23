import React from "react";
import UserName from "../atoms/userName";
import Icon from "../atoms/icon";
import UserID from "../atoms/userID";
import ActionButtons from "../molecules/actionButtons";
import TweetContent from "../atoms/tweetContent";

const Tweet = () => {
  return (
    <div className="pt-1 flex  w-full border-b-[1px] border-ExtraLightGray transition duration-300 ease-in-out hover:bg-ExtraLightGray">
      <div className="m-auto flex w-3/4 min-[390px]">
        <Icon size={46} area="tweet" />
        <div>
          <div className="flex items-center">
            <UserName userName="user" area="tweet" />
            <UserID userID="@userID" area="tweet" />
            <p className="text-[12px] text-darkGray">・yyyy/mm/dd</p>
          </div>
          <div>
            <TweetContent content="tweettweettweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeetttttttttwwwwwwwwweeeeeeeeeettttttttttt" />
            <ActionButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
