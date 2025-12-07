/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  innerLayoutClassName: any;
  nameClassName: any;
  text: string;
  divClassName: any;
  text1: string;
  typeClassName: any;
}

export const Lga = ({
  className,
  innerLayoutClassName,
  nameClassName,
  text = "APAPA IGANMU",
  divClassName,
  text1 = "LCDA",
  typeClassName,
}: Props): JSX.Element => {
  return (
    <div className={`LGA ${className}`}>
      <div className={`inner-layout ${innerLayoutClassName}`}>
        <div className={`name ${nameClassName}`}>
          <div className="apapa-iganmu">{text}</div>
        </div>

        <div className={`type ${typeClassName}`}>
          <div className={`LCDA ${divClassName}`}>{text1}</div>
        </div>
      </div>
    </div>
  );
};

Lga.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
