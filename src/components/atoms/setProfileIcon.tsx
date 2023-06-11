import React from "react";
import Image from "next/image";
import Profile from "@/public/kaf2.webp";
import camera from "@/public/camera.svg";

const SetProfileIcon = () => {
  return (
    <div className="relative h-28 w-28 rounded-full">
      <label htmlFor="media">
        <input type="file" accept="image/*" className="hidden" id="media" />
        <div className="absolute z-20 h-full w-full rounded-full bg-black opacity-50">
          <div className="flex h-full w-full items-center justify-center">
            <Image src={camera} alt="camera" width={30} height={24} />
          </div>
        </div>
        <Image
          //ダミーのプロフィール画像入れておく。ここは後で変える
          src={Profile}
          alt="Icon"
          fill
          //一応読み込む画像を丸くするCSSだけは書いた
          className="rounded-full object-cover"
        />
      </label>
    </div>
  );
};

export default SetProfileIcon;
