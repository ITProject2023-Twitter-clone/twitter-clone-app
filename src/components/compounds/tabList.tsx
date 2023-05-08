import React from "react";
import Tab from "../atoms/tab";

const TabList = () => {
  return (
    <div className="w-full border-b-[1px] border-ExtraLightGray">
      <div className="m-auto flex h-[44px] justify-between">
        <Tab tabName="Tweets" />
        <Tab tabName="Replies" />
        <Tab tabName="Media" />
        <Tab tabName="Likes" />
      </div>
    </div>
  );
};

export default TabList;
