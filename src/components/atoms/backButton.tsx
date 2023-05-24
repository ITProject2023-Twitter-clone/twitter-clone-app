import Image from "next/image";
import React from "react";

//srcの中はsvgにしよう(まだsvg用意してない）
const BackButton = () => {
  return (
    <button>
      <Image src="" alt="backButton" width={28} height={28} />
    </button>
  );
};

export default BackButton;
