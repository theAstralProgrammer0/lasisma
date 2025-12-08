/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Subscribe = ({ className }: Props): JSX.Element => {
  return (
    <div className={`subscribe ${className}`}>
      <div className="inner-frame">
        <div className="heading-2">
          <div className="text-wrapper-20">Subscribe for Updates!</div>
        </div>

        <div className="sub-heading-2">
          <p className="text-wrapper-21">
            Put your email address and subscribe to our newsnewsletter
          </p>
        </div>

        <div className="frame">
          <div className="email-input">
            <div className="text-wrapper-22">Enter email address</div>
          </div>

          <button className="button">
            <div className="text-wrapper-23">Send</div>
          </button>
        </div>
      </div>
    </div>
  );
};
