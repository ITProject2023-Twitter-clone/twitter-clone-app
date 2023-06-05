import React from "react";
import LeftSidebar from "./leftSidebar";
import Header from "../organisms/header";
import RightSidebar from "./rightSidebar";

const Layout = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="h-full w-3/12">
        <LeftSidebar />
      </div>
      <div className="h-full w-5/12 border-l border-r">
        <Header />
      </div>
      <div className="h-full w-4/12">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
