import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  //  return <div className="m-auto max-w-[598px] min-w-[390px] w-full border border-lightGray overflow-hidden">
  return(
  <div>
    {children}
  </div>
  )
};

export default Layout;