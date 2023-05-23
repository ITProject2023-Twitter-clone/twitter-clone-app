import React from "react";
import Icon from "../atoms/icon";
import UserNameID from "../molecules/userNameID";
import FollowButton from "../atoms/followButton";
import BioContent from "../atoms/bioContent";

const FollowRelationUser = () => {
  return (
    <div className="flex justify-between w-full px-10 py-2 transition duration-300 ease-in-out hover:bg-ExtraLightGray">
      <div>
        <div className="flex">
          <Icon area="relation" size={46} />
          <div>
            <UserNameID name="followUser" id="followUserID" area="relation" />
            <BioContent content="bioooooooooooooooooooooooo" />
          </div>
        </div>
      </div>
      <FollowButton />
    </div>
  );
};

export default FollowRelationUser;
