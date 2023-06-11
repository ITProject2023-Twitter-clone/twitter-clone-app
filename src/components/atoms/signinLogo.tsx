import Image from 'next/image'
import React from 'react'
import github from '@/public/github.svg'

//srcとaltとwidthとheightの指定
const SigninLogo = () => {
  return (
    <Image src={github} width={221} height={221} alt=''/>
  )
}

export default SigninLogo