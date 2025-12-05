/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  vectorClassName: any;
  vector: string;
  vectorClassNameOverride: any;
  img: string;
}

export const YoutubeLogo = ({
  className,
  vectorClassName,
  vector = "/img/vector.png",
  vectorClassNameOverride,
  img = "/img/vector.png",
}: Props): JSX.Element => {
  return (
    <a
      className={`youtube-logo ${className}`}
      href="https://youtube.com/@dice_playtv?si=l4v0Y7DuYuqqCoPi"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img className={`vector ${vectorClassName}`} alt="Vector" src={vector} />

      <img
        className={`img ${vectorClassNameOverride}`}
        alt="Vector"
        src={img}
      />
    </a>
  );
};

YoutubeLogo.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
};
