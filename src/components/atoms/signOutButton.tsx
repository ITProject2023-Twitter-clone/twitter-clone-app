import React from "react";
import SignOut from "@/public/sign-out.svg";
import Image from "next/image";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button>
      <Image src={SignOut} width={38} height={38} alt="logout" className="fill-white" />
    </button>
  );
};

export default SignOutButton;
