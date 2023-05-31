import React from 'react'
import ThemaChangeButton from '../atoms/themaChangeButton'
import Sun from "@/public/sun.svg"
import Moon from "@/public/moon.svg"

const ThemaChangeButtons = () => {
  return (
    <div>
    <div className="flex space-x-5">
        <ThemaChangeButton src={Sun} type="light" />
        <ThemaChangeButton src={Moon} type="dark" />
    </div>
  </div>
  )
}

export default ThemaChangeButtons