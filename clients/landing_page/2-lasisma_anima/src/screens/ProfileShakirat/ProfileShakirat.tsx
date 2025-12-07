import React from "react";
import { FacebookLogo } from "../../components/FacebookLogo";
import { TwitterLogo } from "../../components/TwitterLogo";
import { YoutubeLogo } from "../../components/YoutubeLogo";
import "./style.css";

export const ProfileShakirat = (): JSX.Element => {
  return (
    <div className="profile-shakirat">
      <div className="frame-wrapper">
        <div className="frame-2">
          <div className="frame-3">
            <div className="GM">
              <div className="image-2" />
            </div>

            <div className="GM-typography">
              <div className="frame-4">
                <div className="name-title">
                  <div className="text-wrapper-35">Mrs. Alade Shakirat</div>

                  <div className="text-wrapper-36">Head Procurement</div>
                </div>

                <div className="desc">
                  <div className="mrs-alade-shakirat-wrapper">
                    <p className="mrs-alade-shakirat">
                      Mrs. Alade Shakirat Olufisayo is a&nbsp;&nbsp;professional
                      with over a decade of experience in the Lagos State
                      Government. She has held various positions, including Head
                      of Procurement Unit at Lagos State Planning Environmental
                      and Monitoring Authority (LASPEMA).
                      <br />
                      Mrs Alade Shakirat Olufisayo was born January 16, 1979,,
                      in Oshodi -Isolo Lagos State.
                      <br />
                      She went to Ire Akari Model&nbsp;&nbsp;Primary
                      School,&nbsp;&nbsp;Okota Lagos (1988) Andat-Ud-Deen
                      College Isolo, Lagos, (1994).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-outer">
            <div className="text-inner">
              <p className="she-later-proceeded">
                She later proceeded University&nbsp;&nbsp;of Ado- Ekiti (UNAD)
                in Banking &amp;Finance (2001). She also had her Masters in
                Marketing&nbsp;&nbsp;(M.SC) 2005. Institute of Chattered of
                Economics in Nigeria, ICEN (2010). Association of National
                Accountants of Nigeria ANAN (2013).
                <br /> ,Chattered Institute of Purchasing and Supply of Nigeria
                CIPSN , (2014).Association of Procurement Officer of
                Nigeria,&nbsp;&nbsp;APPON, (2023)
                <br />
                <br />
                Her career started with Lagos State Government as
                Education&nbsp;&nbsp;Officer 1 with Lagos State District iii in
                2007. She later redeployed back to mainstream as a Chattered
                Procurement Officer Gl 09 in 2012. Alade Shakirat Olufisayo was
                deployed in 2013 to Ministry of Finance .<br />
                <br />
                Currently serves as Head of Procurement Unit at Lagos State
                Planning Environmental and Monitoring Authority (LASPEMA).
                Association of Institute of Chartered Economics of Nigeria,
                (AICEN). Association of National Accountants of Nigeria (ANAN){" "}
                <br />
                <br />
                Chartered Institute of Purchasing &amp; Supply of Nigeria
                (CIPSM)
              </p>
            </div>
          </div>

          <div className="frame-5">
            <p className="follow-mrs-alade">
              <span className="text-wrapper-37">Follow</span>

              <span className="text-wrapper-38">&nbsp;</span>

              <span className="text-wrapper-39">Mrs. Alade Shakirat</span>
            </p>

            <div className="social-media-2">
              <a
                className="instagram-logo-2"
                href="https://www.instagram.com/laspemaagency1?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw=="
                rel="noopener noreferrer"
                target="_blank"
              />

              <FacebookLogo
                facebookLogo="/img/facebook-logo-19.svg"
                facebookLogoClassName="facebook-logo-2"
                href="https://facebook.com"
              />
              <a
                className="linkedin-logo-2"
                href="https://www.linkedin.com/in/daisi-oso/"
                rel="noopener noreferrer"
                target="_blank"
              />

              <TwitterLogo
                href="https://twitter.com/"
                twitterLogo="/img/twitter-logo-19.svg"
                twitterLogoClassName="twitter-logo-2"
              />
              <YoutubeLogo
                className="youtube-logo-2"
                img="/img/vector-89.svg"
                vector="/img/vector-88.svg"
                vectorClassName="youtube-logo-3"
                vectorClassNameOverride="youtube-logo-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
