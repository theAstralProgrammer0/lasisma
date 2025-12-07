/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const DataBox = ({ className }: Props): JSX.Element => {
  return (
    <div className={`data-box ${className}`}>
      <div className="div-7">
        <div className="title">
          <div className="text-wrapper-25">EST. POPULATION IN LAGOS</div>
        </div>

        <div className="data">
          <div className="text-wrapper-26">22mn+</div>
        </div>
      </div>

      <img className="line" alt="Line" />

      <div className="div-7">
        <div className="title">
          <div className="text-wrapper-27">LGAs and LCDAs</div>
        </div>

        <div className="data">
          <div className="text-wrapper-28">57</div>
        </div>
      </div>

      <img className="line" alt="Line" />

      <div className="div-7">
        <div className="title">
          <div className="text-wrapper-29">INFORMAL COMMUNITIES</div>
        </div>

        <div className="data">
          <div className="text-wrapper-30">200</div>
        </div>
      </div>

      <img className="line" alt="Line" />

      <div className="est-land-mass">
        <div className="title">
          <div className="text-wrapper-31">EST. LAND MASS</div>
        </div>

        <div className="data">
          <div className="text-wrapper-32">3,557km2</div>
        </div>
      </div>
    </div>
  );
};
