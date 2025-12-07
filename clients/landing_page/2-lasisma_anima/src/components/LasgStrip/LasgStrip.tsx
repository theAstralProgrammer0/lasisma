/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const LasgStrip = ({ className }: Props): JSX.Element => {
  return (
    <div className={`lasg-strip ${className}`}>
      <div className="lasg-green-strip" />

      <div className="lasg-yellow-strip" />

      <div className="lasg-blue-strip" />

      <div className="lasg-red-strip" />
    </div>
  );
};
