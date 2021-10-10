import React from "react";
import "./instaicon.css";
export const InstagramIcon = ({ height, width, url }) => {
  return (
    <svg className="insta-icon" height={height} width={width}>
      <use xlinkHref={`${url}#insta`} />
    </svg>
  );
};
export default InstagramIcon;
