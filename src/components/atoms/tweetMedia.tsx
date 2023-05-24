import Image from "next/image";
import React from "react";

type Props = {
  src: string;
}

//srcの中身はURLになる
//css変えたい時はダミーの画像なんか適当にインポートして適度にやって

const TweetMedia = () => {
  return <Image src="" width={0} height={0} alt="" />;
};

export default TweetMedia;
