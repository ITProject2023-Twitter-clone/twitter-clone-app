import React from "react";
import NoItem from "~/components/atoms/noItem";
import ProfileTopTabList from "~/components/molecules/profileTopTabList";
import ProfileTop from "~/components/organisms/profileTop";
import Tweet from "~/components/organisms/tweet";

const Profile = () => {
  const tweets = [...Array(0)]
  return (
    <div className="h-full">
      <div className="pt-14 h-fit">
        <ProfileTop />
        <ProfileTopTabList />
      </div>
      <div className="flex flex-col items-center space-y-3 h-full">
        {tweets.length === 0 ?<div className="my-auto"><NoItem item="tweet" /></div> : ""}
        {tweets.map((i: number) => (
          <div key={i}>
            <Tweet />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
