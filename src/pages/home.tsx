import React from "react";
import Tweet from "~/components/organisms/tweet";
import CreateTweetHome from "~/components/organisms/createTweetHome";

const Home = () => {
  const tweetCount = 10;
  return (
    <div className="mt-28">
      <CreateTweetHome />
      <div className="space-y-3">
        {[...Array(tweetCount)].map((_) => (
          <Tweet />
        ))}
      </div>
    </div>
  );
};

export default Home;
