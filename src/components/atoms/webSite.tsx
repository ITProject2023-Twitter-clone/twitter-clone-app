import Image from "next/image";
import React from "react";

type Props = {
  link: string;
};

//srcはsvg入れて
const WebSite = (props: Props) => {
  return (
    <div>
      <Image src="" width={17} height={17} alt="logo" />
      <p>{props.link}</p>
    </div>
  );
};

export default WebSite;
