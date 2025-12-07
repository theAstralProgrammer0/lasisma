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

export const ArrowDownIcon3 = ({
  color = "white",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`arrow-down-icon-3 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.0001 2.5V17.5M10.0001 17.5L17.0834 10.4167M10.0001 17.5L2.91675 10.4167"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

ArrowDownIcon3.propTypes = {
  color: PropTypes.string,
};
