import Image from "next/image";
import React from "react";
import website from "@/public/website.svg"

type Props = {
  link: string;
};

//srcはsvg入れて
const WebSite = (props: Props) => {
  return (
    <div className="flex w-56">
      <Image src={website} width={17} height={17} alt="logo" />
      <p className="pl-1 opacity-50">{props.link}</p>
    </div>
  );
};

export default WebSite;
