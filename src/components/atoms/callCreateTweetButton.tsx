import React, { useContext } from "react";
import { isClickContext } from "../templetes/layout";



const CallCreateTweetButton = () => {
  const onClickFunc = useContext(isClickContext)
  return (
    <button onClick={() =>onClickFunc(true)} className="btn-outline btn h-20 w-64 rounded-full border-primary text-xl font-bold capitalize duration-300 hover:border-none hover:bg-primary">
      Tweet
    </button>
  );
};

export default CallCreateTweetButton;
