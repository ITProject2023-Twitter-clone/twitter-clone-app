import React from 'react'

type Props = {
  content: string;
}

const SwitchButton = (props:Props) => {
  return (
    <button className="text-center w-full py-2 transition duration-300 ease-in-out hover:bg-ExtraLightGray font-bold ] bg-white relative">{props.content}</button>
  )
}

export default SwitchButton