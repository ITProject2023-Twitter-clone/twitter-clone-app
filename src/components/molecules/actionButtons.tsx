import React from 'react'
import ActionButton from '../atoms/actionButton'

const ActionButtons = () => {
  return (
    <div className='flex items-center justify-between w-3/5'>
      <ActionButton page='Tweet' action='Comment' count={100} />
      <ActionButton page='Tweet' action='Retweet' count={100} />
      <ActionButton page='Tweet' action='Likes' count={100} />
      <ActionButton page='Tweet' action='Share' count={0} />
    </div>
  )
}

export default ActionButtons