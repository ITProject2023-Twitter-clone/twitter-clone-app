import Image from "next/image";
import Link from "next/link";
import React from "react";

type SNSType = "GitHub" | "Twitter" | "Qiita" | "Zenn";

type Props = {
  SNS: SNSType;
};

//returnのところsvgの画像のパス。
//適当に変えといて

const GITHUB_ICON = "/githubIcon.svg";
const TWITTER_ICON = "twitterIcon.svg";
const QIITA_ICON = "/qiitaIcon.svg";
const ZENN_ICON = "zennIcon.svg";

const getSNSClass = (action: SNSType): string => {
  switch (action) {
    case "GitHub": {
      return GITHUB_ICON;
    }
    case "Twitter": {
      return TWITTER_ICON;
    }
    case "Qiita": {
      return QIITA_ICON;
    }
    case "Zenn": {
      return ZENN_ICON;
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
    <Link
      href=""
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B5CDF480]"
    >
      <Image
        src={`${snsClass}`}
        width={36}
        height={36}
        alt="SNS"
        className="h-4 w-4"
      />
    </Link>
  );
};

export default SocialAccount;
