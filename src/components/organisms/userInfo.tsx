import Link from "next/link";
import React from "react";
import Icon from "../atoms/icon";
import HeaderImg from "../atoms/headerImg";
import FollowButton from "../atoms/followButton";
import UserNameID from "../molecules/userNameID";
import BioContents from "../atoms/bioContents";
import FollowRelation from "../atoms/followRelation";

const UserInfo = () => {
  return (
    <div>
      <HeaderImg />
      <div className="relative z-10 m-auto flex w-4/5 justify-between">
        <Icon size={100} area="profile" />
        <div className="mb-3">
          <FollowButton />
        </div>
      </div>
      <div className="relative  m-auto w-4/5">
        <UserNameID name="userName" id="@userID" area="profile" />
        <div className="my-1">
          <BioContents />
          <div className="flex h-[13px] items-center">
            <p className="pr-[5px] text-[10px]  text-darkGray">place</p>
            <Link href="#" className="px-[5px] text-[10px]  text-darkGray">
              linklinklinklinklinklinklinklink
            </Link>
          </div>
        </div>
        <p className="text-[10px]  text-darkGray">
          yyyy/mm/ddよりtwitterを利用しています
        </p>
        <div className="my-1 flex">
          <FollowRelation relation="Follow" count={100} />
          <FollowRelation relation="Follower" count={100} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
