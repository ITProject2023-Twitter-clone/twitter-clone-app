import React from "react";
import NoItem from "~/components/atoms/noItem";
import UserCard from "~/components/organisms/userCard";

const Follower = () => {
  const userCount = [...Array(0)];
  return (
    <div className="flex h-full flex-col items-center space-y-2 pt-28">
      {userCount.length === 0 ? (
        <div className="my-auto">
          <NoItem item="ユーザー" />
        </div>
      ) : (
        ""
      )}
      {userCount.map((_) => (
        <UserCard />
      ))}
    </div>
  );
};

export default Follower;
