import Image from "next/image";
import React from "react";

type Props = {
  date: string;
};

const JoinedDate = (props: Props) => {
  return (
    <div>
      <Image src="" width={17} height={17} alt="logo" />
      <p>joined{props.date}</p>
    </div>
  );
};

export default JoinedDate;
