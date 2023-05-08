import React from 'react'
import Image from 'next/image';
import Header from "../../../public/kaf.jpeg";

const HeaderImg = () => {
  return (
    <Image
    src={Header}
    alt=""
    width={600}
    height={124}
    className="h-[124px] w-[598px]
     object-cover"
  />
  )
}

export default HeaderImg