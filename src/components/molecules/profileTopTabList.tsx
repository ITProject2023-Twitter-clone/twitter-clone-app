import React from "react";
import Tab from "../atoms/tab";

const ProfileTopTabList = () => {
  return (
    <div className="flex justify-between w-full h-fit">
        <Tab tabName="Tweets" />
        <Tab tabName="Replies" />
        <Tab tabName="Media" />
        <Tab tabName="Likes" />
    </div>
  );
};

export default ProfileTopTabList;
