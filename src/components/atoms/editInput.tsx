import React from 'react'

type Props = {
  area : string;
}

//areaにはBioとかUserNameとか入る

const EditInput = (props:Props) => {
  return (
    <input type='text' placeholder={props.area} />
  )
}

export default EditInput