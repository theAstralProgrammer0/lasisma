/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { MaterialSymbols } from "../MaterialSymbols";
import "./style.css";

interface Props {
  className: any;
  override: JSX.Element;
  imageClassName: any;
}

export const NewsCard = ({
  className,
  override = <MaterialSymbols />,
  imageClassName,
}: Props): JSX.Element => {
  return (
    <div className={`news-card ${className}`}>
      <div className={`image ${imageClassName}`} />

      <div className="date">
        <div className="text-wrapper-17">17 MAY, 2025</div>
      </div>

      <div className="headline">
        <p className="LASISMA-receives">
          LASISMA Receives Champion Of Urban Resilience &amp; Adaptation Award
        </p>
      </div>

      <div className="post-duration">
        <div className="timeline">
          {override}
          <div className="text-wrapper-18">1 MIN READ</div>
        </div>

        <div className="read-more">
          <div className="text-wrapper-19">READ MORE</div>
        </div>
      </div>
    </div>
  );
};
