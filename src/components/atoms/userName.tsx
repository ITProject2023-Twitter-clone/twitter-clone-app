import React from 'react';
import { SizeType } from '../types';

type Props = {
  userName: string;
  size?: SizeType
};

const UserName = (props:Props) => {
  return (
    <p className={`font-bold ${props.size === "large" ? "text-xl" : "text-base"}`}>{props.userName}</p>
  )
}

export default UserName;