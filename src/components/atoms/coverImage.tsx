import React from 'react'
import Image from 'next/image';
import Header from "../../../public/kaf.jpeg";

const CoverImage = () => {
  return (
    //ダミーの画像を入れておく、後で変更する
    <Image
    src={Header}
    alt="headerImage"
    width={608}
    height={197}
    className="relation"
  />
  )
}

export default CoverImage