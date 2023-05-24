import React from 'react'
import Image from 'next/image';
import Header from "../../../public/kaf.jpeg";

const CoverImage = () => {
  return (
    //ダミーの画像を入れておく、後で変更する
    <Image
    src={Header}
    alt="headerImage"
    width={600}
    height={124}
    className=""
  />
  )
}

export default CoverImage