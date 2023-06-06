import Image from "next/image";
import React from "react";
import { SizeType } from "../types"
import Profile from "@/public/kaf2.webp";

type Props = {
  size?: SizeType;
};

const getSizeClass = (size: SizeType | undefined) => {
  switch (size) {
    case "large": {
      return "w-28 h-28";
    }
    default: {
      return "w-14 h-14";
    }
  }
};

const Icon = (props: Props, { size = props.size }) => {
  const sizeClass = getSizeClass(size);
  return (
    <div className={`${sizeClass} relative`}>
      <Image
        //ダミーのプロフィール画像入れておく。ここは後で変える
        src={Profile}
        alt="Icon"
        fill
        //一応読み込む画像を丸くするCSSだけは書いた
        className={`rounded-full object-cover`}
      />
    </div>
  );
};

export default Icon;
