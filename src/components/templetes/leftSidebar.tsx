import React from "react";
import SidebarNavList from "../molecules/sidebarNavList";
import CallCreateTweetButton from "../atoms/callCreateTweetButton";
import SidebarUser from "../molecules/sidebarUser";

const LeftSidebar = () => {
  return (
    <div className="h-full w-full">
      <div className="ml-auto flex h-full w-4/5 flex-col">
        <div className="space-y-14 mt-16">
          <SidebarNavList />
          <CallCreateTweetButton />
        </div>
        <div className="mt-auto">
          <SidebarUser />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
