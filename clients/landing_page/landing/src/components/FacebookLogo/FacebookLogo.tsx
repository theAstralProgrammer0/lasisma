/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  facebookLogoClassName: any;
  facebookLogo: string;
  href: string;
}

export const FacebookLogo = ({
  facebookLogoClassName,
  facebookLogo = "/img/vector.png",
  href,
}: Props): JSX.Element => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <img
        className={`facebook-logo ${facebookLogoClassName}`}
        alt="Facebook logo"
        src={facebookLogo}
      />
    </a>
  );
};

FacebookLogo.propTypes = {
  facebookLogo: PropTypes.string,
  href: PropTypes.string,
};
