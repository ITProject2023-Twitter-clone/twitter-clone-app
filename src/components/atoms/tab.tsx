import React from 'react'

type Props = {
  tabName : string;
}

const Tab = (props:Props) => {
  return (
    <button className='w-full font-bold'>{props.tabName}</button>
  )
}

export default Tab