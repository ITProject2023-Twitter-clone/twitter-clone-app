import React from "react";
import Tweet from "~/components/organisms/tweet";
import CreateTweetHome from "~/components/organisms/createTweetHome";

const Home = () => {
  const tweetCount = 10;
  return (
    <>
      <CreateTweetHome />
      <div className="space-y-3">
        {[...Array(tweetCount)].map((_) => (
          <Tweet />
        ))}
      </div>
    </>
  );
};

export default Home;
