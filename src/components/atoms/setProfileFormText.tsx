import React from 'react'


type Props = {
    text: string
}
const SetProfileFormText = (props: Props) => {
  return (
    <p className="text-base">{props.text}</p>
  )
}

export default SetProfileFormText