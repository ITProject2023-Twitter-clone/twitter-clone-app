import React from "react";
import { AreaType } from "..";

type Props = {
  userName: string;
  area: AreaType;
};

const getAreaClass = (area: AreaType): string => {
  switch (area) {
    case "profile":
    case "relation": {
      return "text-[24px]";
    }
    case "tweetDetailes": {
      return "text-[18px]";
    }
    case "tweet":
    case "relation": {
      return "text-[18px] pr-1";
    }
    default: {
      return "text-[14px]";
    }
  }
};

const UserName = (props: Props) => {
  const areaClass = getAreaClass(props.area);
  return <p className={`${areaClass} font-bold`}>{props.userName}</p>;
};

export default UserName;
