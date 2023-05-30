import React from "react";
import Header from "~/components/organisms/header";
import Tweet from "~/components/organisms/tweet";

const Test = () => {
  return (
    <div className="">
      <Header />
      <div className="space-y-3">
        {[...Array(10)].map((i: number) => (
          <div key={i}>
            <Tweet />
          </div>
        ))}
      </div>
      {/* <Tweet /> */}
      {/* <CoverImage /> */}
      {/* <Profile /> */}
      {/* <FollowPage /> */}
      {/* <Timeline /> */}
    </div>
  );
};

export default Test;
