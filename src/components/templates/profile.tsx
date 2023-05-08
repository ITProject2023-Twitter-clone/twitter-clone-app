import React from "react";
import UserInfo from "../organisms/userInfo";
import UserTimeLine from "../organisms/userTimeLine";
import ProfileHeader from "../compounds/profileHeader";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <div className="relative top-[38px]">
        <UserInfo />
        <UserTimeLine />
      </div>
    </div>
  );
};

export default Profile;
