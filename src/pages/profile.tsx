import React from "react";
import ProfileTopTabList from "~/components/molecules/profileTopTabList";
import ProfileTop from "~/components/organisms/profileTop";
import Tweet from "~/components/organisms/tweet";

const Profile = () => {
  return (
    <div>
      <div className="mt-14">
        <ProfileTop />
        <ProfileTopTabList />
      </div>
      <div className="flex flex-col items-center space-y-3">
        {[...Array(10)].map((i: number) => (
          <div key={i}>
            <Tweet />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
