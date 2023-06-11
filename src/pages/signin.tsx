import React from "react";
import SigninButton from "~/components/atoms/signinButton";
import SigninLogo from "~/components/atoms/signinLogo";
import SigninText from "~/components/atoms/signinText";

const Signin = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col items-center space-y-20 pt-20">
        <SigninText />
        <SigninLogo />
        <SigninButton />
      </div>
    </div>
  );
};

export default Signin;
