import React, { ReactNode, createContext } from "react";
import LeftSidebar from "./leftSidebar";
import Header from "../organisms/header";
import RightSidebar from "./rightSidebar";
import CreateTweet from "../organisms/createTweet";
import { useState } from "react";
import { useContext } from "react";

type Props = {
  children: ReactNode;
};

export const isClickContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});

const modalShow = (isClick: boolean) => {
  return isClick === true ? "flex" : "hidden";
};

const Layout = ({ children }: Props) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <div className="flex h-screen w-screen bg-neutral">
      <isClickContext.Provider value={setIsClick}>
        <div className="h-full w-3/12">
          <isClickContext.Provider value={setIsClick}>
            <LeftSidebar />
          </isClickContext.Provider>
        </div>
        <div className="h-full w-5/12 overflow-auto outline">
          <Header />
          <div className="mt-28">{children}</div>
        </div>
        <div className="h-full w-4/12">
          <RightSidebar />
        </div>
        <div
          className={`fixed z-30 h-full w-full justify-center  bg-base-100 bg-opacity-70 transition-all ${modalShow(
            isClick
          )}`}
        >
          <div
            onClick={() => setIsClick(false)}
            className={`fixed z-40 h-full w-full justify-center  transition-all ${modalShow(
              isClick
            )}`}
          ></div>
          <div className="z-50 mt-40 w-5/12">
            <CreateTweet />
          </div>
        </div>
      </isClickContext.Provider>
    </div>
  );
};

export default Layout;
