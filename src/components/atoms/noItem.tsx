import React from "react";

type Props = {
  item: string;
};

const NoItem = (props: Props) => {
  return (
    <p>
      ここに
      {props.item}
      はありません
    </p>
  );
};

export default NoItem;
