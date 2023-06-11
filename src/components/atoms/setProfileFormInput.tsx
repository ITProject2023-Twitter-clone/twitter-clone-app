import React from "react";

type Props = {
  value?: string;
  placeholder: string;
};
const SetProfileFormInput = (props: Props) => {
  return (
    <div className="h-16 w-11/12 rounded-2xl bg-transparent outline">
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        className="h-full w-11/12 bg-transparent ml-8 outline-none placeholder:ml-8"
      />
    </div>
  );
};

export default SetProfileFormInput;
