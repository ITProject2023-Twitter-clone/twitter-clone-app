import React from "react";
import NoItem from "~/components/atoms/noItem";
import Tweet from "~/components/organisms/tweet";

const Archive = () => {
  const tweets = [...Array(0)];
  return (
    <div className="pt-16 space-y-3 flex flex-col items-center h-full">
      {tweets.length === 0 ? (
        <div className="my-auto">
          <NoItem item="アーカイブ" />
        </div>
      ) : (
        ""
      )}
      {tweets.map((_) => (
        <Tweet />
      ))}
    </div>
  );
};

export default Archive;
