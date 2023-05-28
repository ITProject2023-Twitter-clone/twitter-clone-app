import Image from "next/image";
import React from "react";
import { SizeType } from "..";
import Profile from "../../../public/kaf2.webp";

type Props = {
  size: SizeType;
};

const getSizeClass = (size: SizeType) => {
  //ここにはcssの要素（classNameの中身）を書いて
  //Imageではwidthとheightを設定しないで(fill)を使用して、親要素のサイズに合わせるようにするため、ここで書くのは親要素のCSS。でもそんな気にしないで書いてくれていい
  switch (size) {
    case "large": {
      return "";
    }
    default: {
      return "w-14 h-14 relative";
    }
  }
};

const Icon = (props: Props, { size = props.size }) => {
  const sizeClass = getSizeClass(size);
  return (
    <div className={`${sizeClass}`}>
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
