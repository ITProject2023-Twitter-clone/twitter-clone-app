import React from "react";

type PageType = "followRelation" | "profile"
type Props = {
  page: PageType
  bio: string;
};

const returnWidth = (page: PageType) => {
  switch (page) {
    case "profile": {
      return 560;
    };
    default: {
      return 480;
    }
  };
}

const Bio = (props: Props) => {
  return(
  <div className={`w-[${returnWidth(props.page)}px] h-[38px]`}>
    <p className="text-base break-words">{props.bio}</p>
  </div>
  )
};

export default Bio;
