import React from "react";
import { useRouter } from 'next/router';

const ReturnButton = () => {
  const router = useRouter();
  return (
    <button className="h-[26px] w-[26px] items-center rounded-full transition duration-300 ease-in-out hover:bg-ExtraLightGray" type="button" onClick={() => router.back()}>
      ←
      {/* SVGにする */}
    </button>
  );
};

export default ReturnButton;
