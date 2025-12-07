/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  twitterLogoClassName: any;
  twitterLogo: string;
  href: string;
}

export const TwitterLogo = ({
  twitterLogoClassName,
  twitterLogo = "/img/vector-82.png",
  href,
}: Props): JSX.Element => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <img
        className={`twitter-logo ${twitterLogoClassName}`}
        alt="Twitter logo"
        src={twitterLogo}
      />
    </a>
  );
};

TwitterLogo.propTypes = {
  twitterLogo: PropTypes.string,
  href: PropTypes.string,
};
