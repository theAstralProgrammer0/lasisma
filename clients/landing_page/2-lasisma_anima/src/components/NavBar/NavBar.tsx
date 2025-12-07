/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Component } from "../Component";
import { IconamoonArrowDown } from "../IconamoonArrowDown";
import { LaspemaLogoRemix } from "../LaspemaLogoRemix";
import { SearchIcon } from "../SearchIcon";
import { UisArrowUpRight } from "../UisArrowUpRight";
import "./style.css";

interface Props {
  className: any;
  LASPEMALogoRemixLaspemaLogoRemixClassName: any;
  LASPEMALogoRemixLaspemaLogoRemixClassNameOverride: any;
  override: JSX.Element;
  override1: JSX.Element;
  override2: JSX.Element;
  override3: JSX.Element;
  override4: JSX.Element;
  override5: JSX.Element;
  to: string;
}

export const NavBar = ({
  className,
  LASPEMALogoRemixLaspemaLogoRemixClassName,
  LASPEMALogoRemixLaspemaLogoRemixClassNameOverride,
  override = <IconamoonArrowDown />,
  override1 = <IconamoonArrowDown />,
  override2 = <UisArrowUpRight />,
  override3 = <UisArrowUpRight />,
  override4 = <Component />,
  override5 = <SearchIcon />,
  to,
}: Props): JSX.Element => {
  return (
    <div className={`nav-bar ${className}`}>
      <div className="menu">
        <div className="logos">
          <LaspemaLogoRemix
            className={LASPEMALogoRemixLaspemaLogoRemixClassName}
            hasLagosLogo={false}
            hasMiddleEllipse={false}
            hasOutermostEllipse={false}
            hasTextRing={false}
          />
          <LaspemaLogoRemix
            className={LASPEMALogoRemixLaspemaLogoRemixClassNameOverride}
            hasLagosLogo={false}
            hasMiddleEllipse={false}
            hasOutermostEllipse={false}
            hasTextRing={false}
          />
        </div>

        <div className="nav-links">
          <div className="ABOUT-LASPEMA">
            <div className="text-wrapper-33">ABOUT&nbsp;&nbsp;LASISMA</div>

            {override}
          </div>

          <Link className="SERVICES-navlink" to={to}>
            <div className="text-wrapper-33">SERVICES</div>

            {override1}
          </Link>

          <div className="NEWSROOM-navlink">
            <div className="text-wrapper-33">NEWSROOM</div>

            {override2}
          </div>

          <div className="CONNECT-navlink">
            <div className="text-wrapper-33">CONNECT</div>

            {override3}
          </div>
        </div>

        <div className="action-items">
          {override4}
          {override5}
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  to: PropTypes.string,
};
