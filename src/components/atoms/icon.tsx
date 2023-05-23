import Image from "next/image";
import React from "react";
import Profile from "../../../public/kaf2.webp";
import { AreaType } from "..";

type Props = {
  size: number;
  area: AreaType;
};

const getAreaClass = (area: AreaType) => {
  switch (area) {
    case "profile": {
      return "border-4 border-white absolute bottom-0 h-[71px] w-[71px]";
    }
    case "tweet":
    case "relation":
    {
      return "w-[46px] h-[46px] relative mr-2"
    }
    default: {
      return "";
    }
  }
};

const Icon = (props: Props, { area = props.area }) => {
  const areaClass = getAreaClass(area);
  return (
    <div>
      <div className={`${areaClass} rounded-full `}>
        <Image
          src={Profile}
          alt="Icon"
          fill
          className={`rounded-full object-cover`}
        />
      </div>
    </div>
  );
};

export default Icon;
