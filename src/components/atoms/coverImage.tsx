import React from "react";
import Image from "next/image";
import Header from "@/public/kaf.jpeg";

const CoverImage = () => {
  return (
    //ダミーの画像を入れておく、後で変更する
    <div className="absolute w-[608px] h-[197px]">
      <Image
        src={Header}
        alt="headerImage"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default CoverImage;
