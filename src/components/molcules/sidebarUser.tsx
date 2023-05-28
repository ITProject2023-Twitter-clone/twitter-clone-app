import React from "react";
import Icon from "../atoms/icon";
import UserName from "../atoms/userName";
import UserId from "../atoms/userId";
import SignoutButton from "../atoms/signoutButton";

const SidebarUser = () => {
  return (
    <div className="flex w-64 items-center rounded-lg  hover:bg-neutral">
      <Icon size="base" />

      <div className="ml-2">
        <UserName userName="VOWAC" />
        <UserId userId="@VOWAC" />
      </div>
      <div className="ml-20">
        <SignoutButton />
      </div>
    </div>
  );
};

export default SidebarUser;
