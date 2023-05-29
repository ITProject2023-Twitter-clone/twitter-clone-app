import React from 'react'

type Props ={
  date: string
  // string?本当に？
}

const TweetDate = (props:Props) => {
  return (
    <p className='opacity-50'>
      {props.date}
    </p>
  )
}

export default TweetDate