import React from "react";
import { FacebookLogo } from "../../components/FacebookLogo";
import { TwitterLogo } from "../../components/TwitterLogo";
import { YoutubeLogo } from "../../components/YoutubeLogo";
import "./style.css";

export const ProfileMrOjerinde = (): JSX.Element => {
  return (
    <div className="profile-mr-ojerinde">
      <div className="div-wrapper">
        <div className="frame-4">
          <div className="frame-5">
            <div className="image-wrapper">
              <div className="image-2" />
            </div>

            <div className="GM-typography-2">
              <div className="frame-6">
                <div className="name-title-2">
                  <div className="text-wrapper-5">Mr. Ojerinde Emmanuel</div>

                  <div className="head-budget-planning">
                    Head Budget &amp; Planning
                  </div>
                </div>

                <div className="desc-2">
                  <div className="frame-7">
                    <p className="p">
                      Ojerinde Emmanuel Folorunso was born in Osun State. He
                      began his academic journey at St Paul Primary School,
                      Famia, went on to attend Islamic Grammar School, Modakeke.
                      He later bagged a certificate in Teachers’ Training
                      College, Ipetumodu, Osun State, where he developed the
                      foundation for his disciplined character.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-inner-wrapper">
            <div className="he-earned-a-bachelor-wrapper">
              <p className="he-earned-a-bachelor">
                He earned a Bachelor of Science in Demography and Social
                Statistics (B. Sc.) Obafemi Awolowo University, Ile-Ife, earned
                his Master in Public Health (M. P. H.) from Lagos State
                University (LASU), and also a proud member of Health Information
                Council of Nigeria (H. I.M. N.), he did his National Youth
                Service Program (NYSC) in Omoba, Abia State.
                <br /> <br />
                He worked in the private sector for some years after which he
                joined the Lagos State Service as a Statistician II in the
                Health Service Commission in 2005 before his redeployment to the
                Ministry of Economic Planning and Budget(MEPB)  in year 2018, In
                2019, he was redeployed to Ministry of Health (MOH) between
                2019-2023, and again redeployed to Lagos State Planning and
                Environmental Monitoring Authority in year 2023 now Lagos State
                Informal Space Management Authority (LASISMA) as the Head of
                Planning Research and Statistics (PRS) Unit of the Agency till
                date. He is the Director of Planning /Budget in the Agency
                <br />
                <br />
                He is a researcher, analyst disciplined, problem-solving,
                result-oriented resource. He is conversant with the use of
                Excel, Stata, and SPSS analytical tools for necessary analysis.
                He likes Music, Travelling, Researching.
              </p>
            </div>
          </div>

          <div className="frame-8">
            <p className="follow-mr-ojerinde">
              <span className="text-wrapper-6">Follow</span>

              <span className="text-wrapper-7">&nbsp;</span>

              <span className="text-wrapper-8">Mr. Ojerinde Emmanuel</span>
            </p>

            <div className="social-media-2">
              <a
                className="instagram-logo-2"
                href="https://www.instagram.com/laspemaagency1?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw=="
                rel="noopener noreferrer"
                target="_blank"
              />

              <FacebookLogo
                facebookLogo="/img/facebook-logo-3.svg"
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
                twitterLogo="/img/twitter-logo-1.svg"
                twitterLogoClassName="twitter-logo-2"
              />
              <YoutubeLogo
                className="youtube-logo-3"
                img="/img/vector-7.svg"
                vector="/img/vector-6.svg"
                vectorClassName="youtube-logo-4"
                vectorClassNameOverride="youtube-logo-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
