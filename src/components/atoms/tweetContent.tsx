import React from 'react'

type Props = {
  content: string;
}

const TweetContent = (props:Props) => {
  return (
    <p className="break-words text-[12px] w-[75%] max-w-[500px] min-w-[200px]">
    {props.content}
  </p>
  )
}

export default TweetContent