import React from "react";
import UserName from "../atoms/userName";
import ReturnButton from "../atoms/returnButton";
import TweetCount from "../atoms/tweetCount";

const ProfileHeader = () => {
  return (
    <div className="fixed -top-1 z-30 h-[40px] w-[598px] bg-white opacity-95">
      <div className="flex items-center">
        <div className="mt-1 mx-1">
          <ReturnButton />
        </div>
        <UserName userName="userName" area="profile" />
      </div>
      <div className="relative bottom-2 left-9 ">
        <TweetCount />
      </div>
    </div>
  );
};

export default ProfileHeader;
