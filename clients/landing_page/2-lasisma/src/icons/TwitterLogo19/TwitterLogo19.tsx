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

export const TwitterLogo19 = ({
  color = "black",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`twitter-logo-19 ${className}`}
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.7513 9.10391L20.5831 0H18.727L11.927 7.90461L6.49552 0H0.230957L8.44429 11.9533L0.230957 21.5H2.08701L9.26835 13.1525L15.0041 21.5H21.2687L12.7508 9.10391H12.7513ZM10.2093 12.0585L9.37702 10.8683L2.7557 1.39716H5.60646L10.9497 9.04075L11.7818 10.231L18.7278 20.1663H15.8774L10.2093 12.059V12.0585Z"
        fill={color}
      />
    </svg>
  );
};

TwitterLogo19.propTypes = {
  color: PropTypes.string,
};
