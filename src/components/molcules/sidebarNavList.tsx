import React from "react";
import SidebarNav from "../atoms/sidebarNav";

const SidebarNavList = () => {
  return (
    <div className="space-y-10 w-64">
      <SidebarNav item="Home" />
      <SidebarNav item="Profile" />
      <SidebarNav item="Archive" />
    </div>
  );
};

export default SidebarNavList;
