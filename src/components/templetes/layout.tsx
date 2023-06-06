import React, { ReactNode } from "react";
import LeftSidebar from "./leftSidebar";
import Header from "../organisms/header";
import RightSidebar from "./rightSidebar";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-screen bg-neutral">
      <div className="h-full w-3/12">
        <LeftSidebar />
      </div>
      <div className="h-full w-5/12 overflow-auto outline">
        <Header />
        <div className="mt-28">{children}</div>
      </div>
      <div className="h-full w-4/12">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
