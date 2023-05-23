import React from 'react'
import Icon from '../atoms/icon'

const CreateTweet = () => {
  return (
    <div className='h-[96px] border-b-2 border-ExtraLightGray flex'>
      <Icon area='tweet' size={46}/>
      <input type='textarea' className='w-full text-start items-start flex' placeholder="What's up?"/>
    </div>
  )
}

export default CreateTweet