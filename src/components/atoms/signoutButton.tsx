import React from "react";
import SignOut from "@/public/sign-out.svg";
import Image from "next/image";

const SignoutButton = () => {
  return (
    <button>
      <Image src={SignOut} width={38} height={38} alt="signout" className="fill-white" />
    </button>
  );
};

export default SignoutButton;
