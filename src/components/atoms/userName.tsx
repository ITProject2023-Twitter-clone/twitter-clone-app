import React from 'react';

type Props = {
  userName: string;
};

const UserName = (props:Props) => {
  return (
    <p className="font-bold text-base">{props.userName}</p>
  )
}

export default UserName;