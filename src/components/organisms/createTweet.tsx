import React from "react";
import Icon from "../atoms/icon";
import UploadMedia from "../atoms/uploadMedia";
import SubmitTweetButton from "../atoms/submitTweetButton";
import CloseButton from "../atoms/closeButton";

const CreateTweet = () => {
  return (
    <div className=" border px-7 pt-5 rounded-2xl">
      <div>
        <CloseButton />
      </div>
      <div className="flex rounded-xl">
        <Icon size="base" />
        <div className="w-full">
          <textarea
            className="resize-none ml-4 h-full w-full bg-inherit pb-28  pt-3 text-lg outline-none"
            wrap="soft"
            placeholder="What's Up?"
          />
          <div className="my-3 flex items-center justify-between">
            <UploadMedia />
            <SubmitTweetButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
