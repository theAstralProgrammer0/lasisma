import React from "react";
import { FacebookLogo } from "../../components/FacebookLogo";
import { TwitterLogo } from "../../components/TwitterLogo";
import { YoutubeLogo } from "../../components/YoutubeLogo";
import "./style.css";

export const ProfileMrBada = (): JSX.Element => {
  return (
    <div className="profile-mr-bada">
      <div className="frame-wrapper-3">
        <div className="frame-11">
          <div className="frame-12">
            <div className="GM-2">
              <div className="image-4" />
            </div>

            <div className="GM-typography-3">
              <div className="frame-13">
                <div className="name-title-3">
                  <div className="text-wrapper-45">Mr. Bada Munir Afolabi</div>

                  <div className="text-wrapper-46">
                    Head Information Communication Technology
                  </div>
                </div>

                <div className="desc-3">
                  <div className="bada-munir-afolabi-wrapper">
                    <p className="bada-munir-afolabi">
                      Bada Munir Afolabi was born in isale-Eko
                      Lagos&nbsp;&nbsp;Island .He began his academic journey at
                      Nigerian Air Force Nursery/Primary School and went on to
                      attend Abeokuta Grammar School, where he developed the
                      foundation of his disciplined character. He earned a
                      Bachelor of Science in Electonics and Computer Engineering
                      from Lagos State University (LASU), and also a proud
                      member of Council for the Regulation of Engineering in
                      Nigeria (COREN),after which he proceeded for the National
                      Youth Service Program (NYSC) in Lafia, Nassarawa State.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-outer-2">
            <div className="text-inner-2">
              <p className="he-earned-a-bachelor-2">
                He earned a Bachelor of Science in Electonics and Computer
                Engineering from Lagos State University (LASU), and also a proud
                member of Council for the Regulation of Engineering in Nigeria
                (COREN),after which he proceeded for the National Youth Service
                Program (NYSC) in Lafia, Nassarawa State.
                <br />
                <br />
                He was appointed into the Lagos State Service as a Computer
                Engineer II in then Ministry of Science and Technology (MOST)
                now Ministry of Innovation and Technology (MIST) in year 2011,
                he was deployed to Lagos Srate Civil Service Commission (CSC) in
                year 2013-2017. Thereafter, He was deployed to&nbsp;&nbsp;Office
                of the State Auditor General (OSAG) in year 2017-2023.In year
                2023, he was deployed to Lagos State Planning and Environmental
                Monitoring Authority (LASPEMA) noe Lagos State Infotmal Space
                Management Authority (LASISMA) as the Heaf of ICT Unit of the
                Agency till date.
                <br />
                <br />
                He likes Driving,Travelling, Attending to variious online
                certification,Reading, and swimming
              </p>
            </div>
          </div>

          <div className="frame-14">
            <p className="follow-mr-bada-munir">
              <span className="text-wrapper-47">Follow</span>

              <span className="text-wrapper-48">&nbsp;</span>

              <span className="text-wrapper-49">Mr. Bada Munir Afolabi</span>
            </p>

            <div className="social-media-4">
              <a
                className="instagram-logo-4"
                href="https://www.instagram.com/laspemaagency1?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw=="
                rel="noopener noreferrer"
                target="_blank"
              />

              <FacebookLogo
                facebookLogo="/img/facebook-logo-24.svg"
                facebookLogoClassName="facebook-logo-4"
                href="https://facebook.com"
              />
              <a
                className="linkedin-logo-4"
                href="https://www.linkedin.com/in/daisi-oso/"
                rel="noopener noreferrer"
                target="_blank"
              />

              <TwitterLogo
                href="https://twitter.com/"
                twitterLogo="/img/twitter-logo-19.svg"
                twitterLogoClassName="twitter-logo-4"
              />
              <YoutubeLogo
                className="youtube-logo-8"
                img="/img/vector-89.svg"
                vector="/img/vector-88.svg"
                vectorClassName="youtube-logo-9"
                vectorClassNameOverride="youtube-logo-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
