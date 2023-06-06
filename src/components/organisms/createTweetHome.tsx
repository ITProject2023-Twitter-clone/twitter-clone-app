import React from "react";
import CloseButton from "../atoms/closeButton";
import Icon from "../atoms/icon";
import UploadMedia from "../atoms/uploadMedia";
import SubmitTweetButton from "../atoms/submitTweetButton";

const CreateTweetHome = () => {
  return (
    <div className="mx-auto my-2 flex h-40 w-[99%] rounded-xl border">
      <div className="mt-3 flex w-2/12 justify-center">
        <Icon size="base" />
      </div>
      <div className="mt-7 flex w-10/12 flex-col pr-4">
        <textarea placeholder="What’s Up?" className="w-full h-full pl-4 pb-12 bg-transparent break-words resize-none outline-none placeholder:text-lg" />
        <div className="mt-auto flex items-center mb-3">
          <UploadMedia />
          <div className="ml-auto">
            <SubmitTweetButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweetHome;
