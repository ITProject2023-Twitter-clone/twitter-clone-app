import React from 'react'

type Props ={
  formatedDate: string
}

const TweetDate = (props:Props) => {
  return (
    <p className='opacity-50'>
      {props.formatedDate}
    </p>
  )
}

export default TweetDate