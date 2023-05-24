import Image from "next/image";
import Link from "next/link";
import React from "react";

type SNSType = "GitHub" | "Twitter" | "Qiita" | "Zenn";

type Props = {
  SNS: SNSType;
};

//returnのところsvgの画像のパス。
//適当に変えといて
const getSNSClass = (action: SNSType): string => {
  switch (action) {
    case "GitHub": {
      return "/comment-blank-svgrepo-com.svg";
    }
    case "Twitter": {
      return "/retweet-svgrepo-com.svg";
    }
    case "Qiita": {
      return "/twitter-svgrepo-com.svg";
    }
    case "Zenn": {
      return "/share-box-svgrepo-com.svg";
    }
    default: {
      return "";
    }
  }
};


const SocialAccount = (props: Props) => {
  const snsClass = getSNSClass(props.SNS);
  //hrefにはパス
  return (
    <Link href="">
      <Image src={`${snsClass}`} width={36} height={36} alt="SNS" />
    </Link>
  );
};

export default SocialAccount;
