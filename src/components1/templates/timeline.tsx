import React from "react";
import SwitchHeader from "../compounds/switchHeader";
import Tweet from "../compounds/tweet";
import CreateTweet from "../compounds/createTweet";

const Timeline = () => {
  return (
    <div>
      <SwitchHeader
        firstSwitch="For you"
        secondSwitch="Following"
        area="home"
      />
      <div className="mt-20">
        <CreateTweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
};

export default Timeline;
