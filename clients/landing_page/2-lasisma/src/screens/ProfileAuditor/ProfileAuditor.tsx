import React from "react";
import { FacebookLogo } from "../../components/FacebookLogo";
import { TwitterLogo } from "../../components/TwitterLogo";
import { YoutubeLogo } from "../../components/YoutubeLogo";
import "./style.css";

export const ProfileAuditor = (): JSX.Element => {
  return (
    <div className="profile-auditor">
      <div className="frame-wrapper-8">
        <div className="frame-27">
          <div className="frame-28">
            <div className="GM-3">
              <div className="image-25" />
            </div>

            <div className="GM-typography-4">
              <div className="frame-29">
                <div className="name-title-4">
                  <div className="text-wrapper-61">
                    Mr. Ogunbowale Adebowale
                  </div>

                  <div className="text-wrapper-62">Internal Auditor</div>
                </div>

                <div className="desc-4">
                  <div className="mr-ogunbowale-wrapper">
                    <p className="mr-ogunbowale">
                      Mr. Ogunbowale Adebowale Akeem is a distinguished
                      Professional Accountant &amp; Auditor with over two
                      decades of experience in accounting, auditing, and
                      forensic investigation. He currently serves as Head,
                      Internal Audit at Lagos State Planning and Environmental
                      Monitoring Authority (LASPEMA). Born on 27th May, 1970 in
                      Igboye, Epe, Lagos State, he obtained his Senior Secondary
                      Certificate in 1988 from Anwar-UI-Islam College, Agege
                      &amp; Immaculate Heart Comprehensive High School,
                      Maryland.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-outer-3">
            <div className="he-earned-his-higher-wrapper">
              <p className="he-earned-his-higher">
                {" "}
                He earned his Higher National Diploma in Accounting from Federal
                Polytechnic, Ado-Ekiti in 1996, completed NYSC at Kogi State in
                1997, and obtained a Diploma in Forensic Accounting from
                University of Lagos in 2016.
                <br />
                <br />
                Beginning his career in Lagos State Public Service in March 2000
                as HEO(Audit) in the Office of the Auditor General for Local
                Governments, he rose through merit to Deputy Director (Audit)
                with numerous Merit Awards. He is a Fellow of the Association of
                National Accountants of Nigeria (ANAN) and International
                Institute of Certified Forensic Investigation Professionals
                (IICFIP), Associate of the Chartered Institute of Taxation of
                Nigeria (CITN), and holds international certification from
                Association of Chartered System Accountants (ACSA) USA.
                <br />
                <br />
                His professional experience includes leading high-level audit
                and verification exercises, annual Local Government Projects and
                Inspection Exercise, and pension verification initiatives,
                consistently enhancing transparency and fiscal responsibility.
                Beyond official duties, he serves as Treasurer of Fountain
                Riverview CDA Magodo Isheri, Global Internal Auditor of
                Anwar-Ul-Islam College Old Student Association (ACAOSA), and
                held various leadership positions including Past Chairman of
                Bola-Ahmed Tinubu Staff Quarters, Alausa. He is married to Mrs
                Kikelomo Wuraola and blessed with children.
              </p>
            </div>
          </div>

          <div className="frame-30">
            <p className="follow-mr-ogunbowale">
              <span className="text-wrapper-63">Follow</span>

              <span className="text-wrapper-64">&nbsp;</span>

              <span className="text-wrapper-65">Mr. Ogunbowale Adebowale</span>
            </p>

            <div className="social-media-5">
              <a
                className="instagram-logo-5"
                href="https://www.instagram.com/laspemaagency1?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw=="
                rel="noopener noreferrer"
                target="_blank"
              />

              <FacebookLogo
                facebookLogo="/img/facebook-logo-31.svg"
                facebookLogoClassName="facebook-logo-5"
                href="https://facebook.com"
              />
              <a
                className="linkedin-logo-5"
                href="https://www.linkedin.com/in/daisi-oso/"
                rel="noopener noreferrer"
                target="_blank"
              />

              <TwitterLogo
                href="https://twitter.com/"
                twitterLogo="/img/twitter-logo-19.svg"
                twitterLogoClassName="twitter-logo-5"
              />
              <YoutubeLogo
                className="youtube-logo-11"
                img="/img/vector-89.svg"
                vector="/img/vector-88.svg"
                vectorClassName="youtube-logo-12"
                vectorClassNameOverride="youtube-logo-13"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
