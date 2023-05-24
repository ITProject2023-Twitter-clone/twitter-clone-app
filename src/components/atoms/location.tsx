import Image from "next/image";
import React from "react";

type Props = {
  location: string;
};

//srcはsvg入れて
const Location = (props: Props) => {
  return <div>
    <Image src="" width={17} height={17} alt="logo"/>
    <p>{props.location}</p></div>;
};

export default Location;
