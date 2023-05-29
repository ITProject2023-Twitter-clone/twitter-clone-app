import React from "react";
import SidebarNavList from "../molecules/sidebarNavList";
import CreateTweetButton from "../atoms/createTweetButton";
import SidebarUser from "../molecules/sidebarUser";
const Sidebar = () => {
  return (
    <div className="flex h-screen w-72 flex-col justify-between text-center">
      <div className="mx-auto">
        <SidebarNavList />
        <div className="mt-14">
          <CreateTweetButton />
        </div>
      </div>
      <div className="mx-auto">
        <SidebarUser />
      </div>
    </div>
  );
};

export default Sidebar;
