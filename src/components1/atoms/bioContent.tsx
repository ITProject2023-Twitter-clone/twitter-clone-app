import React from "react";

type Props = {
  content: string
}

const BioContent = (props:Props) => {
  return (
    <p className="text-[12px] ">{props.content}</p>
  );
};

export default BioContent;
