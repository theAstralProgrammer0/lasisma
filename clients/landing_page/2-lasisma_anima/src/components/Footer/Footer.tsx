/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FacebookLogo } from "../FacebookLogo";
import { TwitterLogo } from "../TwitterLogo";
import { UisArrowUpRight } from "../UisArrowUpRight";
import { YoutubeLogo } from "../YoutubeLogo";
import "./style.css";

interface Props {
  className: any;
  instagramLogoClassName: any;
  facebookLogoFacebookLogo: string;
  linkedinLogoClassName: any;
  twitterLogoTwitterLogo: string;
  youtubeLogoVector: string;
  youtubeLogoImg: string;
  youtubeLogoVectorClassName: any;
  override: JSX.Element;
  override1: JSX.Element;
  override2: JSX.Element;
  override3: JSX.Element;
  override4: JSX.Element;
  override5: JSX.Element;
  override6: JSX.Element;
  override7: JSX.Element;
  override8: JSX.Element;
  override9: JSX.Element;
  override10: JSX.Element;
  override11: JSX.Element;
  override12: JSX.Element;
  override13: JSX.Element;
  override14: JSX.Element;
  override15: JSX.Element;
  override16: JSX.Element;
  href: string;
  href1: string;
}

export const Footer = ({
  className,
  instagramLogoClassName,
  facebookLogoFacebookLogo,
  linkedinLogoClassName,
  twitterLogoTwitterLogo,
  youtubeLogoVector,
  youtubeLogoImg,
  youtubeLogoVectorClassName,
  override = <UisArrowUpRight />,
  override1 = <UisArrowUpRight />,
  override2 = <UisArrowUpRight />,
  override3 = <UisArrowUpRight />,
  override4 = <UisArrowUpRight />,
  override5 = <UisArrowUpRight />,
  override6 = <UisArrowUpRight />,
  override7 = <UisArrowUpRight />,
  override8 = <UisArrowUpRight />,
  override9 = <UisArrowUpRight />,
  override10 = <UisArrowUpRight />,
  override11 = <UisArrowUpRight />,
  override12 = <UisArrowUpRight />,
  override13 = <UisArrowUpRight />,
  override14 = <UisArrowUpRight />,
  override15 = <UisArrowUpRight />,
  override16 = <UisArrowUpRight />,
  href,
  href1,
}: Props): JSX.Element => {
  return (
    <div className={`footer ${className}`}>
      <div className="footer-content">
        <div className="top">
          <div className="greeting">
            <div className="text-wrapper">Lagos,</div>

            <div className="div">good evening</div>
          </div>

          <div className="social-media">
            <a
              className={`instagram-logo ${instagramLogoClassName}`}
              href="https://www.instagram.com/laspemaagency1?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw=="
              rel="noopener noreferrer"
              target="_blank"
            />

            <FacebookLogo
              facebookLogo={facebookLogoFacebookLogo}
              facebookLogoClassName="facebook-logo-instance"
              href={href}
            />
            <a
              className={`linkedin-logo ${linkedinLogoClassName}`}
              href="https://www.linkedin.com/in/daisi-oso/"
              rel="noopener noreferrer"
              target="_blank"
            />

            <TwitterLogo
              href={href1}
              twitterLogo={twitterLogoTwitterLogo}
              twitterLogoClassName="twitter-logo-instance"
            />
            <YoutubeLogo
              className="youtube-logo-instance"
              img={youtubeLogoVector}
              vector={youtubeLogoImg}
              vectorClassName="design-component-instance-node"
              vectorClassNameOverride={youtubeLogoVectorClassName}
            />
          </div>
        </div>

        <div className="links">
          <div className="government">
            <div className="link-list">
              <div className="link">
                {override}
                <div className="text-wrapper-2">Apply for Lag-ID</div>
              </div>

              <div className="link">
                {override1}
                <div className="text-wrapper-2">Judiciary Officers</div>
              </div>

              <a
                className="link"
                href="https://lagoshouseofassembly.gov.ng/home/our-team/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {override2}
                <div className="text-wrapper-2">Legislative Officers</div>
              </a>

              <a
                className="link"
                href="https://lagosstate.gov.ng/government/mdas/all"
                rel="noopener noreferrer"
                target="_blank"
              >
                {override3}
                <div className="text-wrapper-2">Explore MDAs</div>
              </a>

              <a
                className="link"
                href="https://lagosstate.gov.ng/government/elected_officials"
                rel="noopener noreferrer"
                target="_blank"
              >
                {override4}
                <div className="text-wrapper-2">Executive Council</div>
              </a>

              <a
                className="link"
                href="https://lagosstate.gov.ng/government/elected_officials/governor/view"
                rel="noopener noreferrer"
                target="_blank"
              >
                {override5}
                <div className="text-wrapper-2">About Governor</div>
              </a>
            </div>

            <div className="links-header">
              <div className="text-wrapper-3">GOVERNMENT</div>
            </div>
          </div>

          <div className="government">
            <div className="link-list">
              <div className="link">
                {override6}
                <div className="text-wrapper-2">Investment</div>
              </div>

              <div className="link">
                {override7}
                <div className="text-wrapper-2">Report Violation</div>
              </div>

              <div className="link">
                {override8}
                <div className="text-wrapper-2">Renew License</div>
              </div>

              <div className="link">
                {override9}
                <div className="text-wrapper-2">Generate License</div>
              </div>
            </div>

            <div className="div-wrapper">
              <div className="text-wrapper-4">QUICK SERVICES</div>
            </div>
          </div>

          <div className="government">
            <div className="link-list">
              <div className="link">
                {override10}
                <div className="text-wrapper-2">FAQs</div>
              </div>

              <div className="link">
                {override11}
                <div className="text-wrapper-2">Newsroom</div>
              </div>

              <div className="link">
                {override12}
                <div className="text-wrapper-2">LASISMA Initiatives</div>
              </div>

              <div className="link">
                {override13}
                <div className="text-wrapper-2">Meet Our Team</div>
              </div>

              <div className="link">
                {override14}
                <div className="text-wrapper-5">About LASISMA</div>
              </div>
            </div>

            <div className="links-header">
              <div className="text-wrapper-6">QUICK NAVIGATION</div>
            </div>
          </div>

          <div className="government">
            <div className="link-list">
              <div className="link">
                {override15}
                <div className="text-wrapper-2">Privacy Policy</div>
              </div>

              <div className="link">
                {override16}
                <div className="text-wrapper-2">Contact Us</div>
              </div>
            </div>

            <div className="links-header">
              <div className="text-wrapper-7">SUPPORT</div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="inner">
            <p className="p">
              © COPYRIGHT 2025, ALL RIGHTS RESERVED  |   LASGOS STATE GOVERNMENT
            </p>

            <p className="POWERED-BY-LAGOS">
              <span className="span">POWERED BY</span>

              <span className="text-wrapper-8">
                {" "}
                - LAGOS STATE PLANNING AND ENVIRONMENTAL MONITORING AUTHORITY
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  facebookLogoFacebookLogo: PropTypes.string,
  twitterLogoTwitterLogo: PropTypes.string,
  youtubeLogoVector: PropTypes.string,
  youtubeLogoImg: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
};
