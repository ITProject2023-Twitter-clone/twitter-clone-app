import React from 'react'
import NoItem from '~/components/atoms/noItem';
import Tweet from '~/components/organisms/tweet';

const QuoteTweets = () => {
    const tweets = [...Array(10)]
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
}

export default QuoteTweets