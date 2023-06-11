import React from "react";
import SetProfileFormText from "../atoms/setProfileFormText";
import SetProfileFormInput from "../atoms/setProfileFormInput";

type Props = {
  text: string
  placeholder: string
}
const SetProfileIForm = (props: Props) => {
  return (
    <div>
      <div className="ml-2">
        <SetProfileFormText text={props.text} />
      </div>
      <SetProfileFormInput placeholder={props.placeholder} />
    </div>
  );
};

export default SetProfileIForm;
