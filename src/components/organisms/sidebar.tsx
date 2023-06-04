import React from "react";
import SidebarNavList from "../molecules/sidebarNavList";
import CallCreateTweetButton from "../atoms/callCreateTweetButton";
import SidebarUser from "../molecules/sidebarUser";
const Sidebar = () => {
  return (
    <div className="flex h-screen w-72 flex-col justify-between text-center">
      <div className="mx-auto">
        <SidebarNavList />
        <div className="mt-14">
          <CallCreateTweetButton />
        </div>
      </div>
      <div className="mx-auto">
        <SidebarUser />
      </div>
    </div>
  );
};

export default Sidebar;
