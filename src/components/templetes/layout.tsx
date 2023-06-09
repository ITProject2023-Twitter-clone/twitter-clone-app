import React, { ReactNode, createContext } from "react";
import LeftSidebar from "./leftSidebar";
import Header from "../organisms/header";
import RightSidebar from "./rightSidebar";
import CreateTweet from "../organisms/createTweet";
import { useState } from "react";


type Props = {
  children: ReactNode
 
};

export const isClickContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});


const modalShow = (isClick: boolean) => {
  return isClick === true ? "flex" : "hidden";
};

const Layout = (props: Props) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <div className="flex h-screen w-screen bg-neutral">

      <div className="h-full w-3/12">
        <isClickContext.Provider value={setIsClick}>
          <LeftSidebar />
        </isClickContext.Provider>
      </div>
      <div className="h-full w-5/12 overflow-auto outline">
        <Header />
        {props.children}
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
        <div className="z-50 my-auto w-5/12 h-72">
          <isClickContext.Provider value={setIsClick}>
            <CreateTweet />
          </isClickContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Layout;
