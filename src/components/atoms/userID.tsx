import React from 'react'
import { AreaType } from '..'

type Props = {
  userID: string;
  area: AreaType;
};

const getAriaClass = (area: AreaType): string => {
  switch(area) {
    case 'profile': {return 'text-[10px]'}
    case 'tweetDetailes': {return 'text-[18px]'}
    default: {return 'text-[14px]'}
  }
}

const UserID = (props: Props) => {
  const areaClass = getAriaClass(props.area);
  return <p className={`${areaClass} text-darkGray`}>{props.userID}</p>;;
};

export default UserID