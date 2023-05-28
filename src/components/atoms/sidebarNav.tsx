import Image from "next/image";
import React from "react";

type ItemType = "Home" | "Profile" | "Archive";

type Props = {
  item: ItemType;
};


const HOME = "/Home.svg";
const PROFILE = "/Profile.svg";
const ARCHIVE = "/Archive.svg"

//ダミーのsrcを入れてる。適切なsvgに変更してほしい
const getSrcClass = (item: ItemType): string => {

  switch (item) {
    case "Home": {
      return HOME;
    }
    case "Profile": {
      return PROFILE;
    }
    case "Archive": {
      return ARCHIVE;
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
    <div className="flex h-14 w-64 items-center rounded-xl p-5 duration-300 hover:bg-neutral">
      <Image src={`${srcClass}`} alt="sidebarItemLogo" width={39} height={39} />
      <p className="ml-8 text-xl">{props.item}</p>
    </div>
  );
};

export default SidebarNav;
