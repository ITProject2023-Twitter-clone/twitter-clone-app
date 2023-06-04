import React from "react";
import Image from "next/image";


type ButtonType = "dark" | "light"

type Props = {
    src: string
    type: ButtonType
}

const returnStyle = (type: ButtonType) => {
    switch (type) {
        case "dark": {
            return "bg-primary"
        }
        case "light": {
            return "border" 
        }
    }
}
const themeChangeButton = (props: Props) => {
  return (
    <label className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-md ${returnStyle(props.type)}`}>
      <input type="radio" name="options" data-title="1" className="hidden" />
      <Image src={props.src} width={20} height={20} alt="light" />
    </label>
  );
};

export default themeChangeButton;
