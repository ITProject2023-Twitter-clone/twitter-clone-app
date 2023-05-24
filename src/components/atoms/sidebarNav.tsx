import Image from "next/image";
import React from "react";

type ItemType = "Home" | "Profile" | "Archive";

type Props = {
  item: ItemType;
};

//ダミーのsrcを入れてる。適切なsvgに変更してほしい
const getSrcClass = (item: ItemType): string => {
  switch (item) {
    case "Home": {
      return "/comment-blank-svgrepo-com.svg";
    }
    case "Profile": {
      return "/retweet-svgrepo-com.svg";
    }
    case "Archive": {
      return "/twitter-svgrepo-com.svg";
    }
    default: {
      return "";
    }
  }
};

const SidebarNav = (props: Props) => {
  const srcClass = getSrcClass(props.item);
  return (
    //div?Link?button?
    <div>
      <Image src={`${srcClass}`} alt="sidebarItemLogo" width={39} height={39} />
      <p>{props.item}</p>
    </div>
  );
};

export default SidebarNav;
