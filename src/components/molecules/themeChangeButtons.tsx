import React from 'react'
import ThemeChangeButton from '../atoms/themeChangeButton'
import Sun from "@/public/sun.svg"
import Moon from "@/public/moon.svg"

const ThemeChangeButtons = () => {
  return (
    <div>
    <div className="flex space-x-5">
        <ThemeChangeButton src={Sun} type="light" />
        <ThemeChangeButton src={Moon} type="dark" />
    </div>
  </div>
  )
}

export default ThemeChangeButtons