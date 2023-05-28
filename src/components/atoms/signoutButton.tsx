import React from "react";
import SignOut from "@/public/sign-out.svg";
import Image from "next/image";

const SignutButton = () => {
  return (
    <button>
      <Image src={SignOut} width={38} height={38} alt="signout" className="fill-white" />
    </button>
  );
};

export default SignutButton;
