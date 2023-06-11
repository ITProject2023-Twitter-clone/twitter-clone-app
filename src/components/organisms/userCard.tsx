import React from "react";
import Icon from "../atoms/icon";
import UserName from "../atoms/userName";
import UserId from "../atoms/userId";
import Bio from "../atoms/bio";
import FollowButton from "../atoms/followButton";

const UserCard = () => {
  return (
    <div className="flex h-32 w-[98%] rounded-2xl bg-base-100 px-2 py-4">
      <div>
        <Icon />
      </div>
      <div className="ml-2">
        <div className="flex">
          <div>
            <UserName userName="VOWAC" />
            <UserId userId="VOWAC" />
          </div>
          <div className="ml-auto">
            <FollowButton />
          </div>
        </div>
        <div className="w-full">
          <Bio
            bio="メイフ🐝💧🎠にじさんじ🌈🕒非公式アカウント✨コーヴァス帝国からきました。"
            page="followRelation"
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
