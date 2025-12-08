/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  hasOutermostEllipse: boolean;
  hasTextRing: boolean;
  hasMiddleEllipse: boolean;
  hasLagosLogo: boolean;
}

export const LaspemaLogoRemix = ({
  className,
  hasOutermostEllipse = true,
  hasTextRing = true,
  hasMiddleEllipse = true,
  hasLagosLogo = true,
}: Props): JSX.Element => {
  return (
    <div className={`LASPEMA-logo-remix ${className}`}>
      {hasOutermostEllipse && (
        <img
          className="outermost-ellipse"
          alt="Outermost ellipse"
          src="/img/outermost-ellipse-1.svg"
        />
      )}

      {hasTextRing && (
        <img className="text-ring" alt="Text ring" src="/img/text-ring-1.svg" />
      )}

      {hasMiddleEllipse && <div className="middle-ellipse" />}

      {hasLagosLogo && (
        <img
          className="lagos-logo"
          alt="Lagos logo"
          src="/img/lagos-logo-1-1.png"
        />
      )}
    </div>
  );
};

LaspemaLogoRemix.propTypes = {
  hasOutermostEllipse: PropTypes.bool,
  hasTextRing: PropTypes.bool,
  hasMiddleEllipse: PropTypes.bool,
  hasLagosLogo: PropTypes.bool,
};
