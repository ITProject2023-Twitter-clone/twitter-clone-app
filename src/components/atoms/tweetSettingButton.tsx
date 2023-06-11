import Image from 'next/image'
import React from 'react'
import readerImage from "@/public/tweetSetting.svg"

const TweetSettingButton = () => {
  //三点リーダー
  return (
    <button>
      <Image src={readerImage} width={41} height={41} alt='' />
    </button>
  )
}

export default TweetSettingButton