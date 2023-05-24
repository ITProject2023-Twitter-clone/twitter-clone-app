import Image from "next/image";
import React from "react";
import backButton from '~/../public/backButton.svg';

//srcの中はsvgにしよう(まだsvg用意してない）
const BackButton = () => {
  return (
    <button>
      <Image src={backButton} alt="backButton" width={28} height={28} />
    </button>
  );
};

export default BackButton;
