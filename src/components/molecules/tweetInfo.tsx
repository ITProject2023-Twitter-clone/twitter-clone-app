import React from 'react'
import UserName from '../atoms/userName'
import UserId from '../atoms/userId'
import TweetDate from '../atoms/tweetDate'

const TweetInfo = () => {
  return (
    <div className='flex space-x-2'>
      <UserName userName='VOWAC'/>
      <UserId userId='@VOWAC'/>
      <TweetDate formatedDate='2023/05/29'/>
    </div>
  )
}

export default TweetInfo