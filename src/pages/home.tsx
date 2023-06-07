import React from "react";
import Tweet from "~/components/organisms/tweet";
import Layout from "~/components/templetes/layout";
import CreateTweetHome from "~/components/organisms/createTweetHome";

const Home = () => {
  const tweetCount = 10;
  return (
    <Layout>
      <CreateTweetHome />
      <div className="space-y-3">
        {[...Array(tweetCount)].map((_) => (
          <Tweet />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
