import React from "react";
import SwitchHeader from "../compounds/switchHeader";
import FollowRelationUser from "../compounds/followRelationUser";
import Link from "next/link";

const FollowPage = () => {
  return (
    <div>
      <SwitchHeader firstSwitch="Follower" secondSwitch="Following" area="relation" />
      <div className="mt-28">
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
        <FollowRelationUser />
      </div>
    </div>
  );
};

export default FollowPage;
