import React from "react";
import UserInfo from "../organisms/userInfo";
import UserTweets from "../organisms/userTweets";
import ProfileHeader from "../compounds/profileHeader";
import TabList from "../compounds/tabList";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <div className="relative top-[38px]">
        <UserInfo />
        <TabList />
        <UserTweets />
      </div>
    </div>
  );
};

export default Profile;
