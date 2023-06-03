import React from 'react'

type Props = {
  placeholder : string;
}

//placeholderにはBioとかUserNameとか入る

const EditInput = (props:Props) => {
  return (
    <input type='text' placeholder={props.placeholder} />
  )
}

export default EditInput