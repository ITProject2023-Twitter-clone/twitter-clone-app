import Image from "next/image";
import React from "react";

const UploadMedia = () => {
  return (
    <label htmlFor="media" className="flex cursor-pointer">
      <input type="file" accept="image/*" className="hidden" id="media" />
      <Image
        src="media.svg"
        width={24}
        height={24}
        alt="media"
        id="media"
        className=""
      />
      <p className="px-3 opacity-50">Upload Media</p>
    </label>
  );
};

export default UploadMedia;
