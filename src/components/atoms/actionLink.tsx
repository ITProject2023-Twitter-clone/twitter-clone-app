import Link from 'next/link';
import React from 'react'

type ActionType = "Retweets" | "Quotes" | "Likes";

//カウント数が1の場合、複数形ではない。
//カウント数が0の場合、表示されない。

type Props = {
  action: ActionType;
  count: number;
}


//hrefの中に入るのはページのパス。
const ActionLink = (props:Props) => {
  return (
    <Link href="">
      <p>{props.count}</p>
      <p>{props.action}</p>
    </Link>
  )
}

export default ActionLink