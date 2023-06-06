import React from "react";
import Icon from "../atoms/icon";
import UploadMedia from "../atoms/uploadMedia";
import SubmitTweetButton from "../atoms/submitTweetButton";
import CloseButton from "../atoms/closeButton";
import DraftButton from "../atoms/draftButton";

const CreateTweet = () => {
  return (
    <div className="rounded-2xl bg-neutral pt-4">
      <div className="flex px-5">
        <CloseButton />
        <div className="ml-auto mr-14">
          <DraftButton />
        </div>
      </div>
      <div className="flex border-b border-current pl-8">
        <Icon />
        <textarea
          className="ml-4 h-full w-full resize-none bg-inherit pb-28  pt-3 text-lg outline-none"
          wrap="soft"
          placeholder="What's is happening!?!?!?!?"
        />
      </div>
      <div className="flex h-20 items-center px-5">
        <UploadMedia />
        <div className="ml-auto">
          <SubmitTweetButton />
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
