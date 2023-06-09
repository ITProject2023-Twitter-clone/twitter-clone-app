import React from 'react'

type Props = {
  tabName : string;
}

const Tab = (props:Props) => {
  return (
    <button className='w-fit pb-1 font-bold  transition duration-300 ease-in-out hover:bg-ExtraLightGray border-b-primary hover:border-b-2'>{props.tabName}</button>
  )
}

export default Tab