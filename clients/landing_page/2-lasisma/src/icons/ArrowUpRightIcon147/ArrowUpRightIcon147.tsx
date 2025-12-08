/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const ArrowUpRightIcon147 = ({
  color = "black",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`arrow-up-right-icon-147 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.1667 5H5.83333C5.33333 5 5 5.33333 5 5.83333C5 6.33333 5.33333 6.66667 5.83333 6.66667H12.1667L5.25 13.5833C4.91667 13.9167 4.91667 14.4167 5.25 14.75C5.58333 15.0833 6.08333 15.0833 6.41667 14.75L13.3333 7.83333V14.1667C13.3333 14.6667 13.6667 15 14.1667 15C14.6667 15 15 14.6667 15 14.1667V5.83333C15 5.33333 14.6667 5 14.1667 5Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightIcon147.propTypes = {
  color: PropTypes.string,
};
