import Link from 'next/link';
import React from 'react'

type ActionType = "Retweets" | "Quotes" | "Likes";

//カウント数が1の場合、複数形ではない。
//カウント数が0の場合、表示されない。

type Props = {
  action: ActionType;
  count: number;
}

//propsをそのまま表示だめ


//hrefの中に入るのはページのパス。
const ActionLink = (props:Props) => {
  return (
    <Link href="" className="flex w-[110px] h-[34px]">
      <p className="text-base font-bold">{props.count}</p>
      <p className="text-base ml-2 ">{props.action}</p>
    </Link>
  )
}

export default ActionLink