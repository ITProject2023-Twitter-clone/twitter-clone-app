import React from "react";
import UserName from "../atoms/userName";
import ReturnButton from "../atoms/returnButton";
import TweetCount from "../atoms/tweetCount";

const ProfileHeader = () => {
  return (
    <div className="fixed h-[40px] w-[598px] bg-white opacity-95 z-30 -top-1">
      <div className="flex items-center">
        <ReturnButton />
        <UserName userName="userName" area="profile" />
      </div>
      <div className="bottom-2 left-7 relative ">
        <TweetCount />
      </div>
    </div>
  );
};

export default ProfileHeader;
