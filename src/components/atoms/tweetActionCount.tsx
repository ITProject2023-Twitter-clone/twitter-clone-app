import React from 'react'

type Props = {
    count: number
    text: "Retweets" | "Quotes" | "Likes";
}
const TweetActionCount = (props: Props) => {
  return (
    <div className="flex cursor-pointer">
        <p className="text-base font-bold">
            {props.count}
        </p>
        <p className="opacity-50 text-base ml-2">
            {props.text}
        </p>
    </div>
  )
}

export default TweetActionCount