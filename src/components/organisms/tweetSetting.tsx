import Image from "next/image";
import React from "react";
import Setting from "@/public/setting.svg"
const TweetSetting = () => {
  return <Image src={Setting} width={22} height={22} alt="setting" />;
};

export default TweetSetting;
