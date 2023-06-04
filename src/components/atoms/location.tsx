import Image from "next/image";
import React from "react";
import location from "@/public/location.svg";

type Props = {
  location: string;
};

//srcはsvg入れて
const Location = (props: Props) => {
  return (
    <div className="flex w-24 h-fit">
      <Image src={location} width={17} height={17} alt="logo" />
      <p className="pl-1 opacity-50">{props.location}</p>
    </div>
  );
};

export default Location;
