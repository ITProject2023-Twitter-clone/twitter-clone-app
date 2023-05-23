import React from 'react';

type Props = {
  userName: string;
};

const UserName = (props:Props) => {
  return (
    <p className="text-base font-bold">{props.userName}</p>
  )
}

export default UserName;