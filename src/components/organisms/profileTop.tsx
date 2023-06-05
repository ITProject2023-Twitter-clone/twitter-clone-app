import React from "react";
import CoverImage from "../atoms/coverImage";
import Icon from "../atoms/icon";
import SocialAcounts from "../molecules/socialAcounts";
import EditButton from "../atoms/editButton";
import UserName from "../atoms/userName";
import UserId from "../atoms/userId";
import Bio from "../atoms/bio";
import Location from "@/atoms/location";
import WebSite from "../atoms/webSite";
import JoinedDate from "../atoms/joinedDate";
import FollowRelation from "../atoms/followRelation";

const ProfileTop = () => {
  return (
    <div>
      <div className="h-fit w-full">
        <CoverImage />
      </div>

      <div className="relative mx-7 mt-3">
        <div className="absolute bottom-0 h-fit w-fit rounded-full border-4 border-neutral">
          <Icon size="large" />
        </div>
        <div className="ml-auto mr-5 flex w-fit items-center space-x-5">
          <SocialAcounts />
          <EditButton />
        </div>
      </div>

      <div className="mx-4 mt-6">
        <div className="space-y-3">
          <UserName userName="VOWAC" />
          <UserId userId="@VOWAC" />
          <Bio
            bio="インフラエンジニアとINFURAエンジニアがいておもろいね"
            page="profile"
          />
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex space-x-3">
            <Location location="education" />
            <WebSite link="LinkLinkLinkLinkLinkLinkLinkLinkLinkLinkLinkLinkLinkLink" />
          </div>
          <JoinedDate date="May 2023" />
          <div className="flex space-x-4">
            <FollowRelation relation="follow" count={100} />
            <FollowRelation relation="follower" count={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
