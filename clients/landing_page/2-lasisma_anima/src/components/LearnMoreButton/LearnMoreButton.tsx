/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const LearnMoreButton = ({ className }: Props): JSX.Element => {
  return (
    <button className={`learn-more-button ${className}`}>
      <div className="text-wrapper-24">Learn more</div>
    </button>
  );
};
