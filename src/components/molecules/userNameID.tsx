import React from 'react'
import UserName from '../atoms/userName'
import UserID from '../atoms/userID'
import { AreaType } from '..'

type Props ={
  name: string;
  id: string;
  area: AreaType;
}

const UserNameID = (props:Props) => {
  return (
    <>
      <UserName userName={props.name} area={props.area} />
      <UserID userID={props.id} area={props.area}  />
    </>
  )
}

export default UserNameID