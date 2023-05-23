import React from 'react'
import ActionButton from '../atoms/actionButton'

const ActionButtons = () => {
  return (
    <div className='flex w-[300px]'>
      <ActionButton src='Comment' />
      <ActionButton src='Retweet' />
      <ActionButton src='Likes' />
      <ActionButton src='Share' />
    </div>
  )
}

export default ActionButtons