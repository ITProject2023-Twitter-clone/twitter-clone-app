import React from 'react'
import TweetActionButton from '../atoms/tweetActionButton'

const ActionButtons = () => {
  return (
    <div className='flex items-center justify-between w-3/5'>
      <TweetActionButton page='Tweet' action='Comment' count={100} />
      <TweetActionButton page='Tweet' action='Retweet' count={100} />
      <TweetActionButton page='Tweet' action='Likes' count={100} />
      <TweetActionButton page='Tweet' action='Share' />
    </div>
  )
}

export default ActionButtons