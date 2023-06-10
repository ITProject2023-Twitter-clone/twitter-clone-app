import React from "react";

type PageType = "followRelation" | "profile"
type Props = {
  page: PageType
  bio: string;
};

const returnWidth = (page: PageType) => {
  switch (page) {
    case "profile": {
      return "w-5/6";
    };
    default: {
      return "w-full";
    }
  };
}

const Bio = (props: Props) => {
  return(
  <div className={`${returnWidth(props.page)} h-10`}>
    <p className="text-base break-words">{props.bio}</p>
  </div>
  )
};

export default Bio;
