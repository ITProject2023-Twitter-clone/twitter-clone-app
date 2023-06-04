import Image from "next/image";
import React from "react";
import joinedDate from "@/public/joinedDate.svg"

type Props = {
  date: string;
};

const JoinedDate = (props: Props) => {
  return (
    <div className="flex w-fit">
      <Image src={joinedDate} width={17} height={17} alt="logo" />
      <p className="ml-2 opacity-50"><span className="mr-1">joined</span>{props.date}</p>
    </div>
  );
};

export default JoinedDate;
