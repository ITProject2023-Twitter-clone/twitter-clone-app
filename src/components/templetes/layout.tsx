import React, { ReactNode, createContext } from "react";
import LeftSidebar from "./leftSidebar";
import Header from "../organisms/header";
import RightSidebar from "./rightSidebar";
import CreateTweet from "../organisms/createTweet";
import { useState } from "react";


type Props = {
  children: ReactNode
};

// export const isClickContext = createContext<
//   React.Dispatch<React.SetStateAction<boolean>>
// >(() => {});


// const modalShow = (isClick: boolean) => {
//   return isClick === true ? "flex" : "hidden";
// };

const Layout = (props: Props) => {
  // const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <div className="flex h-screen w-screen bg-neutral">

      <div className="h-full w-3/12">
        {/* <isClickContext.Provider value={setIsClick}> */}
          <LeftSidebar />
        {/* </isClickContext.Provider> */}
      </div>
      <div className="h-full w-5/12 overflow-auto outline">
        <Header />
        {props.children}
      </div>
      <div className="h-full w-4/12">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
