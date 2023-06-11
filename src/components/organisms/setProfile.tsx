import React from "react";
import SetProfileCoverImage from "../atoms/setProfileCoverImage";
import defaultCoverImage from "@/public/coverImage.png";
import SetProfileIcon from "../atoms/setProfileIcon";
import SetProfileIForm from "../molecules/setProfileForm";

const SetProfile = () => {
  return (
    <div>
      <div className="h-fit w-full">
        <SetProfileCoverImage src={defaultCoverImage} />
      </div>

      <div className="relative z-30 mx-7 mt-3 h-12">
        <div className="absolute bottom-0 h-fit w-fit rounded-full">
          <SetProfileIcon />
        </div>
      </div>
      <div className="space-y-7 mt-4 mx-auto w-11/12 mb-3">
        <SetProfileIForm text="Name" placeholder="Input your name" />
        <SetProfileIForm text="Bio" placeholder="Input your bio" />
        <SetProfileIForm text="Location" placeholder="Input your location" />
        <SetProfileIForm text="web site" placeholder="Input your website" />
        <SetProfileIForm text="Git Hub" placeholder="Input your Github Account" />
      </div>
    </div>
  );
};

export default SetProfile;
