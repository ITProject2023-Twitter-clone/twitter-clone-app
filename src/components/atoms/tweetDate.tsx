import React from 'react'

type Props ={
  date: string
  // string?本当に？
}

const TweetDate = (props:Props) => {
  return (
    <p>
      {props.date}
    </p>
  )
}

export default TweetDate