import React, { ReactElement } from "react";
import ReturnButton from "../atoms/returnButton";
import SwitchButton from "../atoms/switchButton";
import UserName from "../atoms/userName";
import UserID from "../atoms/userID";
import { AreaType } from "..";

type Props = {
  firstSwitch: string;
  secondSwitch: string;
  area: AreaType;
};

const getAriaClass = (area: AreaType): ReactElement => {
  switch (area) {
    case "home": {
      return (
        <div className="ml-6">
          <p className="text-3xl font-bold">Home</p>
        </div>
      );
    }
    case "relation":
    default: {
      return (
        <div className="flex">
          <div className="mx-1 mt-3">
            <ReturnButton />
          </div>
          <div className="">
            <UserName userName="user" area="relation" />
            <UserID userID="userID" area="relation" />
          </div>
        </div>
      );
    }
  }
};

const SwitchHeader = (props: Props) => {
  const areaClass = getAriaClass(props.area);
  return (
    <div className="fixed -top-1 z-30  w-[598px] bg-white opacity-95">
      <div className="flex items-center">
        {areaClass}
      </div>

      <div className="flex justify-between border-b-[1px] border-ExtraLightGray">
        <SwitchButton content={props.firstSwitch} />
        <SwitchButton content={props.secondSwitch} />
      </div>
    </div>
  );
};

export default SwitchHeader;
