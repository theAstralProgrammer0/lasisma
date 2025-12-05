/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const HumbleiconsArrowGoBack = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`humbleicons-arrow-go-back ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11 18H14.75C16.1424 18 17.4777 17.4469 18.4623 16.4623C19.4469 15.4777 20 14.1424 20 12.75C20 11.3576 19.4469 10.0223 18.4623 9.03769C17.4777 8.05312 16.1424 7.5 14.75 7.5H5M7.5 4L4 7.5L7.5 11"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
