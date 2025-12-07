/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const EmergencyInfo = ({ className }: Props): JSX.Element => {
  return (
    <div className={`emergency-info ${className}`}>
      <div className="emergency-info-inner">
        <p className="text-wrapper-34">
          CONTACT: 18G OLUTOYE CRESCENT, ADENIYI JONES, IKEJA, LAGOS | +234 802
          644 7595
        </p>
      </div>
    </div>
  );
};
