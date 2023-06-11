import React from "react";
import Image, { StaticImageData } from "next/image";
import Header from "@/public/kaf.jpeg";
import camera from "@/public/camera.svg";
import defaultCoverImage from "@/public/coverImage.png"

type Props ={
    src: StaticImageData | string
}
const SetProfileCoverImage = (props: Props) => {
  return (
    <div className="relative h-48 w-full">
      <label htmlFor="media">
        <div className="absolute z-20 h-full w-full bg-black opacity-50">
          <div className="flex h-full w-full items-center justify-center">
            <Image src={camera} alt="camera" width={30} height={24} />
          </div>
        </div>
        <Image
          src={props.src}
          alt="headerImage"
          fill
          className="z-10 object-cover"
        />
      </label>
    </div>
  );
};

export default SetProfileCoverImage;
