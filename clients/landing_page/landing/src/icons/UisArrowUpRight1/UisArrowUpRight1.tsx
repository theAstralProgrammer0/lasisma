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

export const UisArrowUpRight1 = ({
  color = "white",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`uis-arrow-up-right-1 ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.91667 3.5H4.08333C3.73333 3.5 3.5 3.73333 3.5 4.08333C3.5 4.43333 3.73333 4.66667 4.08333 4.66667H8.51667L3.675 9.50833C3.44167 9.74167 3.44167 10.0917 3.675 10.325C3.90833 10.5583 4.25833 10.5583 4.49167 10.325L9.33333 5.48333V9.91667C9.33333 10.2667 9.56667 10.5 9.91667 10.5C10.2667 10.5 10.5 10.2667 10.5 9.91667V4.08333C10.5 3.73333 10.2667 3.5 9.91667 3.5Z"
        fill={color}
      />
    </svg>
  );
};

UisArrowUpRight1.propTypes = {
  color: PropTypes.string,
};
