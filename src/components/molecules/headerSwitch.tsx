import React from "react";
import SwitchElement from "../atoms/switchElement";

type Page = "followRelation"
type Props = {
  page?: Page
}
const Switch = (props: Props) => {
  return (
    <div className="flex border-b w-full">
      <div className="w-full border-r">
        <SwitchElement pageName={props.page === "followRelation" ? "followers" :"home"} />
      </div>
      <SwitchElement pageName="Following" />
    </div>
  );
};

export default Switch;
