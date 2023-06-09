import React from "react";

type Props = {
  tabName: string;
};

const Tab = (props: Props) => {
  return (
    <div className="w-1/4 flex justify-center h-16">
      <button className="hover:bg-ExtraLightGray w-full border-b-primary  font-bold transition duration-300 ease-in-out
      hover:after:mx-auto hover:after:block hover:after:h-1 hover:after:w-14 hover:after:rounded-sm hover:after:bg-primary">
        {props.tabName}
      </button>
    </div>
  );
};

export default Tab;
