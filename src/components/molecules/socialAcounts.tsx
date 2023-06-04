import React from 'react'
import SocialAccount from '../atoms/socialAccount'

const SocialAcounts = () => {
  return (
    <div className="flex w-42 h-fit space-x-3">
        <SocialAccount SNS="GitHub" />
        <SocialAccount SNS="Twitter" />
        <SocialAccount SNS="Qiita" />
        <SocialAccount SNS="Zenn" />
    </div>
  )
}

export default SocialAcounts