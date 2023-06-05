import React from "react";
import Image from "next/image";
import Header from "@/public/kaf.jpeg";

const CoverImage = () => {
  return (
    //ダミーの画像を入れておく、後で変更する
    <div className="relative w-full h-48">
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
