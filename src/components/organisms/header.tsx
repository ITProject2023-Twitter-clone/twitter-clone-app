import React from "react";
import HeaderTtile from "../atoms/headerTtile";
import HeaderSwitch from "../molecules/headerSwitch";
import { useRouter } from "next/router";
import BackButton from "../atoms/backButton";
import UserName from "../atoms/userName";
import UserId from "../atoms/userId";
import TweetCount from "../atoms/tweetCount";
import SaveButton from "../atoms/saveButton";

const returnPathName = () => {
  const router = useRouter();
  const pathName = router.pathname;

  return pathName;
};

const returnHeaderTitle = () => {
  const pathName = returnPathName();
  switch (pathName) {
    case "/home": {
      return "Home";
    }
    case "/signin": {
      return "Signin";
    }
    case "/initialSetting": {
      return "Initial Setting";
    }
    case "/tweet": {
      return "Tweet";
    }
    case "/archive": {
      return "Archive";
    }
    case "/quoteTweet": {
      return "Quote Tweets";
    }
    case "/likes": {
      return "Likes";
    }
    case "/retweets": {
      return "Retweets";
    }
    case "/tweetDetail": {
      return "Tweet";
    }
  }
};

const returnHeader = () => {
  const pathName = returnPathName();
  switch (pathName) {
    case "/signin": {
      return (
        <div className="flex h-14 items-center border-b pl-12">
          <HeaderTtile title={`${returnHeaderTitle()}`} />
        </div>
      );
    }
    case "/initialSetting": {
      return (
        <>
          <div className="flex h-14 items-center border-b pl-12">
            <HeaderTtile title={`${returnHeaderTitle()}`} />
            <div className="ml-auto mr-5">
              <SaveButton />
            </div>
          </div>
        </>
      );
    }
    case "/home": {
      return (
        <>
          <div className="flex h-14 items-center border-b pl-12">
            <HeaderTtile title={`${returnHeaderTitle()}`} />
          </div>
          <HeaderSwitch />
        </>
      );
    }
    case "/profile": {
      return (
        <div className="flex h-14 items-center border-b">
          <div className="mx-4">
            <BackButton />
          </div>
          <div className="leading-none">
            <UserName userName="VOWAC" size="large" />
            <TweetCount count={100} />
          </div>
        </div>
      );
    }
    case "/follower":
    case "/following": {
      return (
        <>
          <div className="flex h-14 items-center border-b">
            <div className="mx-4">
              <BackButton />
            </div>
            <div className="leading-none">
              <UserName userName="VOWAC" size="large" />
              <UserId userId="VOWAC" />
            </div>
          </div>
          <HeaderSwitch page="followRelation" />
        </>
      );
    }
    case "/tweetDetail":
    case "archive":
    case "quoteTweets":
    case "likes":
    case "retweets": {
      return (
        <div className="flex h-14 items-center border-b">
          <div className="mx-4 flex items-center">
            <BackButton />
          </div>
          <div className="ml-4">
            <HeaderTtile title={`${pathName}`} />
          </div>
        </div>
      );
    }
  }
};

const Header = () => {
  const pathName = returnHeaderTitle();
  return (
    <div className="fixed z-10 w-5/12 bg-neutral bg-opacity-60">
      {returnHeader()}
    </div>
  );
};

export default Header;
