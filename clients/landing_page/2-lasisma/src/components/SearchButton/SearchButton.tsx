/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowUpRightIcon147 } from "../../icons/ArrowUpRightIcon147";
import "./style.css";

interface Props {
  className: any;
  divClassName: any;
  text: string;
  icon: JSX.Element;
}

export const SearchButton = ({
  className,
  divClassName,
  text = "SEARCH",
  icon = <ArrowUpRightIcon147 className="uis-arrow-up-right" color="white" />,
}: Props): JSX.Element => {
  return (
    <button className={`search-button ${className}`}>
      <div className="search-text-icon">
        <div className={`SEARCH ${divClassName}`}>{text}</div>

        {icon}
      </div>
    </button>
  );
};

SearchButton.propTypes = {
  text: PropTypes.string,
};
