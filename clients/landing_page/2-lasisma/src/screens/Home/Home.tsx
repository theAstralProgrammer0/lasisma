import React from "react";
import { Link } from "react-router-dom";
import { DataBox } from "../../components/DataBox";
import { EmergencyInfo } from "../../components/EmergencyInfo";
import { Footer } from "../../components/Footer";
import { LasgStrip } from "../../components/LasgStrip";
import { LaspemaLogoRemix } from "../../components/LaspemaLogoRemix";
import { LearnMoreButton } from "../../components/LearnMoreButton";
import { Lga } from "../../components/Lga";
import { NavBar } from "../../components/NavBar";
import { NewsCard } from "../../components/NewsCard";
import { ReportForm } from "../../components/ReportForm";
import { SearchButton } from "../../components/SearchButton";
import { Subscribe } from "../../components/Subscribe";
import { UisArrowUpRight } from "../../components/UisArrowUpRight";
import { ArrowDownIcon3 } from "../../icons/ArrowDownIcon3";
import { ArrowUpRightIcon147 } from "../../icons/ArrowUpRightIcon147";
import { CloudUploadIcon2 } from "../../icons/CloudUploadIcon2";
import { EpArrowLeft1 } from "../../icons/EpArrowLeft1";
import { EpArrowRight1 } from "../../icons/EpArrowRight1";
import { IconamoonArrowDown2Light1 } from "../../icons/IconamoonArrowDown2Light1";
import { MaterialSymbolsLightTimerOutline27 } from "../../icons/MaterialSymbolsLightTimerOutline27";
import { RiLinkedinFill2 } from "../../icons/RiLinkedinFill2";
import { SearchIcon1 } from "../../icons/SearchIcon1";
import { User7 } from "../../icons/User7";
import "./style.css";

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <Footer
        className="footer-instance"
        facebookLogoFacebookLogo="/img/facebook-logo-2.svg"
        href="https://facebook.com"
        href1="https://twitter.com/"
        instagramLogoClassName="footer-2"
        linkedinLogoClassName="footer-3"
        override={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override1={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override10={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override11={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override12={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override13={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override14={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override15={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override16={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override2={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override3={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override4={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override5={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override6={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override7={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override8={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        override9={
          <ArrowUpRightIcon147
            className="arrow-up-right-icon-266"
            color="#26824A"
          />
        }
        twitterLogoTwitterLogo="/img/twitter-logo-2.svg"
        youtubeLogoImg="/img/vector-10.svg"
        youtubeLogoVector="/img/vector-11.svg"
        youtubeLogoVectorClassName="footer-4"
      />
      <div className="frame-31">
        <div className="stakeholders">
          <div className="div-8">
            <div className="frame-32">
              <div className="frame-33">
                <img
                  className="mask-group"
                  alt="Mask group"
                  src="/img/mask-group-2.png"
                />

                <div className="name-title-5">
                  <div className="text-wrapper-66">Mr. Babajide Sanwo-Olu</div>

                  <div className="text-wrapper-67">Lagos State Governor</div>
                </div>

                <div className="quote">
                  <div className="text-wrapper-68">“</div>

                  <div className="frame-34">
                    <p className="text-wrapper-69">
                      We will not take our partnership with the European Union
                      for granted. We know what is expected of us and we
                      continue to make ourselves available in all engagements.
                    </p>
                  </div>

                  <div className="text-wrapper-70">”</div>
                </div>

                <div className="submit-button-2">
                  <div className="text-wrapper-71">Connect</div>

                  <RiLinkedinFill2 className="ri-linkedin-fill" />
                </div>
              </div>
            </div>

            <div className="frame-35">
              <div className="frame-36">
                <div className="frame-37">
                  <div className="frame-38">
                    <img
                      className="mask-group-2"
                      alt="Mask group"
                      src="/img/mask-group-4.png"
                    />

                    <div className="name-title-6">
                      <div className="text-wrapper-72">
                        Dr. Olumide Abiodun Oluyinka
                      </div>

                      <p className="text-wrapper-73">
                        Honorable Commissioner Physical Planning and Urban
                        Development
                      </p>
                    </div>

                    <div className="quote-2">
                      <div className="text-wrapper-74">“</div>

                      <div className="frame-39">
                        <p className="text-wrapper-75">
                          We will not take our partnership with the European
                          Union for granted. We know what is expected of us and
                          we continue to make ourselves available in all
                          engagements.
                        </p>
                      </div>

                      <div className="text-wrapper-76">”</div>
                    </div>

                    <div className="submit-button-3">
                      <div className="text-wrapper-77">Connect</div>

                      <RiLinkedinFill2 className="ri-linkedin-fill-2" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-40">
                <div className="frame-41">
                  <div className="frame-42">
                    <img
                      className="mask-group-3"
                      alt="Mask group"
                      src="/img/mask-group-5.png"
                    />

                    <div className="name-title-7">
                      <div className="text-wrapper-78">
                        Engr. Oluwole Sotire
                      </div>

                      <p className="text-wrapper-79">
                        Permanent Secretary for Ministry of Physical Planning
                      </p>
                    </div>

                    <div className="quote-3">
                      <div className="text-wrapper-80">“</div>

                      <div className="frame-43">
                        <p className="text-wrapper-81">
                          We will not take our partnership with the European
                          Union for granted. We know what is expected of us and
                          we continue to make ourselves available in all
                          engagements.
                        </p>
                      </div>

                      <div className="text-wrapper-82">”</div>
                    </div>

                    <div className="submit-button-4">
                      <div className="text-wrapper-83">Connect</div>

                      <RiLinkedinFill2 className="ri-linkedin-fill-1" />
                    </div>
                  </div>
                </div>

                <div className="frame-44">
                  <div className="div-9">
                    <img
                      className="mask-group-4"
                      alt="Mask group"
                      src="/img/mask-group.png"
                    />

                    <div className="name-title-8">
                      <div className="text-wrapper-84">
                        Dr. Olajide Abiodun Babajide
                      </div>

                      <p className="text-wrapper-79">
                        Special Adviser e-GIS &amp; Urban Development
                      </p>
                    </div>

                    <div className="quote-3">
                      <div className="text-wrapper-80">“</div>

                      <div className="frame-43">
                        <p className="text-wrapper-81">
                          We will not take our partnership with the European
                          Union for granted. We know what is expected of us and
                          we continue to make ourselves available in all
                          engagements.
                        </p>
                      </div>

                      <div className="text-wrapper-82">”</div>
                    </div>

                    <div className="submit-button-4">
                      <div className="text-wrapper-83">Connect</div>

                      <RiLinkedinFill2 className="ri-linkedin-fill-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-45">
              <div className="frame-46">
                <img
                  className="mask-group"
                  alt="Mask group"
                  src="/img/mask-group-1.png"
                />

                <div className="name-title-9">
                  <div className="text-wrapper-85">
                    Dr. Kadri Obafemi Hamzat
                  </div>

                  <div className="text-wrapper-67">
                    Lagos State Deputy Governor
                  </div>
                </div>

                <div className="quote">
                  <div className="text-wrapper-68">“</div>

                  <div className="frame-34">
                    <p className="text-wrapper-69">
                      We will not take our partnership with the European Union
                      for granted. We know what is expected of us and we
                      continue to make ourselves available in all engagements.
                    </p>
                  </div>

                  <div className="text-wrapper-70">”</div>
                </div>

                <div className="submit-button-2">
                  <div className="text-wrapper-71">Connect</div>

                  <RiLinkedinFill2 className="ri-linkedin-fill" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="generate-license">
          <div className="GET-STARTED-LINK">
            <p className="GET-STARTED">
              <span className="text-wrapper-86">GET STARTED</span>

              <span className="text-wrapper-87">{""}</span>
            </p>

            <ArrowUpRightIcon147
              className="icon-instance-node-2"
              color="#26824A"
            />
          </div>

          <div className="steps">
            <div className="step">
              <div className="get-verified">
                <div className="text-wrapper-88">Get verified</div>

                <p className="text-wrapper-89">
                  Complete the onboarding and KYC processes to get verified. Let
                  us get to know you.
                </p>
              </div>

              <div className="element">
                <div className="text-wrapper-90">1</div>
              </div>
            </div>

            <div className="step-2">
              <div className="select-a-space">
                <div className="text-wrapper-91">Select a space</div>

                <p className="choose-a-space-from">
                  Choose a space from our IUS Marketplace to fit your business
                  type and&nbsp;&nbsp;its requirements.
                </p>
              </div>

              <div className="element-2">
                <div className="text-wrapper-92">2</div>
              </div>
            </div>

            <div className="step-3">
              <div className="pay-for-space">
                <div className="text-wrapper-93">Pay for space</div>

                <p className="make-payment-via-any">
                  <span className="text-wrapper-94">
                    Make payment via any of the available payment methods.
                    Toggle{" "}
                  </span>

                  <span className="text-wrapper-95">renew</span>

                  <span className="text-wrapper-94">
                    {" "}
                    for automatic renewal of license.
                  </span>
                </p>
              </div>

              <div className="element-3">
                <div className="text-wrapper-96">3</div>
              </div>
            </div>

            <div className="step-4">
              <div className="generate-license-2">
                <div className="text-wrapper-97">Await Approval</div>

                <p className="agency-begins">
                  Agency&nbsp;&nbsp;begins processing your application
                  immediately after transaction successful.
                </p>
              </div>

              <div className="element-4">
                <div className="text-wrapper-98">4</div>
              </div>
            </div>

            <div className="step-5">
              <div className="generate-license-3">
                <div className="text-wrapper-99">Get license</div>

                <p className="text-wrapper-100">
                  Review and print your license. Upon expiry, a renewal is
                  required.
                </p>
              </div>

              <div className="element-5">
                <div className="text-wrapper-101">5</div>
              </div>
            </div>
          </div>

          <div className="you-can-now-generate-wrapper">
            <p className="you-can-now-generate">
              <span className="text-wrapper-102">
                You can now generate licenses to carry out informal business on
                Informal Urban and Open Spaces by following{" "}
              </span>

              <span className="text-wrapper-103">5 easy steps</span>
            </p>
          </div>

          <div className="heading-3">
            <p className="generate-your">
              <span className="text-wrapper-102">
                Generate your&nbsp;&nbsp;
              </span>

              <span className="text-wrapper-103">license</span>

              <span className="text-wrapper-102">
                {" "}
                to commence use&nbsp;&nbsp;of IUS &amp; IOS
              </span>
            </p>
          </div>
        </div>

        <div className="join-LASPEMA">
          <div className="carousel-5">
            <div className="image-26" />

            <div className="image-27" />

            <div className="image-28" />

            <div className="image-29" />

            <div className="image-30" />
          </div>

          <div className="head-2">
            <div className="join-LASISMA-to-wrapper">
              <p className="join-LASISMA-to">
                <span className="text-wrapper-102">Join </span>

                <span className="text-wrapper-103">LASISMA</span>

                <span className="text-wrapper-102"> to protect </span>

                <span className="text-wrapper-103">Lagos</span>

                <span className="text-wrapper-102">
                  {" "}
                  from urban face violation
                </span>
              </p>
            </div>

            <div className="sub-heading-3">
              <p className="text-wrapper-104">
                Lagos State is committed to improving its urban face. Access
                LASISMA services online, including license generation, urban
                face violation report, and more
              </p>
            </div>
          </div>
        </div>

        <div className="LASPEMA-initiatives">
          <div className="hy-SPAC">
            <div className="text-outer-4">
              <div className="text-inner-3">
                <Link className="text-wrapper-105" to="/hyspac-modal">
                  HySPAC pumping machine
                </Link>

                <p className="text-wrapper-106">
                  The Hybrid Solar Powered Air Compressor pumping machine is a
                  total game changer for the vulcanizers of Lagos city. It
                  brings dignity to the vulcanizing labor, reduces their stress,
                  and promotes the overall health and well-being of Lagos’
                  vulcanizers. In addition, it reduces air and noise pollution
                  guaranteeing the reduction of carbon footprint in Lagos in
                  line with the UN Framework Convention on climate-change to
                  stabilize Green House Gas concentration in the earth’s
                  atmosphere.
                </p>
              </div>
            </div>

            <div className="image-31" />
          </div>

          <div className="div-8">
            <div className="image-32" />

            <div className="text-outer-4">
              <div className="text-inner-4">
                <Link
                  className="text-wrapper-105"
                  to="/solar-powered-kiosks-modal"
                >
                  Solar Powered Kiosks
                </Link>

                <p className="div-10">
                  <span className="text-wrapper-102">
                    Our urban face is witnessing disorderliness occasioned by
                    unsustainable wooden kiosks (aka KANTA).{" "}
                  </span>

                  <span className="text-wrapper-103">LASISMA</span>

                  <span className="text-wrapper-102">
                    {" "}
                    has designed and deployed Lagos standardized kiosks to
                    provide a clean and sustainable workspace for informal
                    vendors, potentially improving the aesthetics of our
                    Informal Urban Spaces. This initiative utilizes solar energy
                    reducing reliance on the grid and promoting the use of
                    renewable energy in Lagos. The kiosks meet global standards
                    in terms of design and functionality for the vendors.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="div-8">
            <div className="text-outer-5">
              <div className="frame-47">
                <Link to="/urban-agric-modal">
                  <p className="text-wrapper-107">
                    Urban Agriculture Under High Tension Power Lines
                  </p>
                </Link>

                <p className="div-10">
                  <span className="text-wrapper-103">LASISMA</span>

                  <span className="text-wrapper-102">
                    {" "}
                    has action plans to utilize the underused spaces underneath
                    the high-tension power lines for urban agriculture,
                    specifically for planting food crops such as tomatoes,
                    habanero, e.t.c. Beyond enhancing food security, this
                    initiative is sure to increase employment opportunities,
                    Lagos’ internal generated revenue (IGR), and the Nation’s
                    gross domestic product (GDP). One kilometer of high-tension
                    corridor land has the potential to generate over{" "}
                  </span>

                  <span className="text-wrapper-103">N300,000,000</span>

                  <span className="text-wrapper-102">
                    {" "}
                    worth of habanero per annum.
                  </span>
                </p>
              </div>
            </div>

            <div className="image-33" />
          </div>

          <div className="div-8">
            <div className="image-34" />

            <div className="text-outer-4">
              <div className="text-inner-5">
                <Link className="text-wrapper-105" to="/action-plans-modal">
                  Action Plans
                </Link>

                <p className="div-10">
                  <span className="text-wrapper-102">
                    All the above mentioned initiatives will translate into the
                    sustainable use of our Informal Urban Spaces (IUS)
                    statewide. Orderliness, aesthetics, and urban resilience are
                    derived from{" "}
                  </span>

                  <span className="text-wrapper-103">educated planning</span>

                  <span className="text-wrapper-102"> and </span>

                  <span className="text-wrapper-103">enforcement of laws</span>

                  <span className="text-wrapper-102"> against the </span>

                  <span className="text-wrapper-108">misuse and abuse</span>

                  <span className="text-wrapper-102">
                    {" "}
                    of urban infrastructure. Currently, action plans are in the
                    works to improve Alimosho, Ikorodu, Agege, and other
                    prominent cities’ urban face.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="div-11">
            <div className="text-wrapper-109">SEE ALL INITIATIVES</div>

            <ArrowUpRightIcon147
              className="icon-instance-node-2"
              color="#26824A"
            />
          </div>
        </div>

        <div className="GRU-section">
          <div className="card-holder">
            <div className="div-12">
              <p className="got-questions-read">
                <span className="text-wrapper-110">
                  Got questions? Read our{" "}
                </span>

                <span className="text-wrapper-111">FAQ</span>
              </p>

              <div className="inner-3">
                <div className="text-wrapper-112">Browse available spaces</div>

                <p className="text-wrapper-113">
                  Select and generate IUS license instantly
                </p>

                <SearchButton
                  className="apply-button"
                  divClassName="search-button-instance"
                  icon={<UisArrowUpRight />}
                  text="Apply"
                />
              </div>
            </div>

            <div className="div-12">
              <p className="got-questions-read">
                <span className="text-wrapper-110">
                  Got questions? Read our{" "}
                </span>

                <span className="text-wrapper-111">FAQ</span>
              </p>

              <div className="inner-3">
                <div className="text-wrapper-114">Continue your operations</div>

                <p className="text-wrapper-113">
                  Renew your existing license seamlessly
                </p>

                <SearchButton
                  className="apply-button"
                  divClassName="apply-button-2"
                  icon={
                    <ArrowUpRightIcon147
                      className="arrow-up-right-icon-2"
                      color="white"
                    />
                  }
                  text="Renew"
                />
              </div>
            </div>

            <div className="div-12">
              <p className="got-questions-read">
                <span className="text-wrapper-110">
                  Got questions? Read our{" "}
                </span>

                <span className="text-wrapper-111">FAQ</span>
              </p>

              <div className="inner-3">
                <div className="text-wrapper-115">Start your application</div>

                <div className="text-wrapper-113">
                  Upload documents for&nbsp;&nbsp;approval
                </div>

                <SearchButton
                  className="apply-button"
                  divClassName="apply-button-3"
                  icon={
                    <ArrowUpRightIcon147
                      className="arrow-up-right-icon-2"
                      color="white"
                    />
                  }
                  text="Start"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="report-section">
          <div className="report">
            <div className="stop-sign-image" />

            <ReportForm
              className="design-component-instance-node-2"
              override={
                <IconamoonArrowDown2Light1 className="iconamoon-arrow-down" />
              }
              override1={<CloudUploadIcon2 className="icon-instance-node-3" />}
            />
          </div>
        </div>

        <div className="news">
          <div className="SEE-THE-FULL-STORY">
            <div className="text-wrapper-109">SEE MORE NEWS</div>

            <ArrowUpRightIcon147
              className="icon-instance-node-2"
              color="#26824A"
            />
          </div>

          <div className="news-holder">
            <NewsCard
              className="design-component-instance-node-3"
              override={
                <MaterialSymbolsLightTimerOutline27 className="icon-instance-node-3" />
              }
            />
            <NewsCard
              className="design-component-instance-node-3"
              imageClassName="news-card-instance"
              override={
                <MaterialSymbolsLightTimerOutline27 className="icon-instance-node-3" />
              }
            />
            <NewsCard
              className="design-component-instance-node-3"
              imageClassName="news-card-2"
              override={
                <MaterialSymbolsLightTimerOutline27 className="icon-instance-node-3" />
              }
            />
            <NewsCard
              className="design-component-instance-node-3"
              imageClassName="news-card-3"
              override={
                <MaterialSymbolsLightTimerOutline27 className="icon-instance-node-3" />
              }
            />
          </div>

          <div className="sub-heading-4">
            <p className="text-wrapper-116">
              Read latest news and updates on our IUS policies
            </p>
          </div>

          <div className="heading-3">
            <p className="text-wrapper-117">
              Stay informed with the latest news
            </p>
          </div>
        </div>

        <Subscribe className="subscribe-instance" />
      </div>

      <div className="MVHM">
        <div className="revolutionize">
          <div className="text-outer-6">
            <div className="text-inner-6">
              <div className="text-wrapper-107">About Us</div>

              <p className="text-wrapper-118">
                Revolutionizing and Refining Lagos’ Urban Face
              </p>

              <p className="LASISMA-regulates">
                <span className="text-wrapper-103">LASISMA</span>

                <span className="text-wrapper-102">
                  {" "}
                  regulates and coordinates Informal Urban and Open Spaces (IUS
                  &amp; IOS) in Lagos State, monitoring setbacks (roads,
                  railways, pipelines, wetlands, etc.) to prevent misuse. The
                  agency ensures urban aesthetics, coordinates site selection
                  for informal businesses like vulcanizing and petty trading,
                  and enforces compliance with operational licenses.
                </span>
              </p>

              <LearnMoreButton className="learn-more-button-instance" />
            </div>
          </div>

          <img
            className="image-subtract"
            alt="Image subtract"
            src="/img/image-subtract.png"
          />

          <LaspemaLogoRemix
            className="LASPEMA-logo"
            hasLagosLogo={false}
            hasMiddleEllipse={false}
            hasOutermostEllipse={false}
            hasTextRing={false}
          />
        </div>

        <div className="history">
          <div className="mission-frame" />

          <div className="text-outer-7">
            <div className="LASISMA-was-wrapper">
              <p className="LASISMA-was">
                <span className="text-wrapper-103">LASISMA</span>

                <span className="text-wrapper-102">
                  {" "}
                  was originally established as{" "}
                </span>

                <span className="text-wrapper-108">LASPEMA</span>

                <span className="text-wrapper-102">
                  {" "}
                  back in 2001 under the Ministry of Physical Planning and
                  Environment. This happened during the forward-thinking
                  leadership of Governor Emeritus Asiwaju Bola Ahmed Tinubu, who
                  now serves as President of Nigeria. The agency started with a
                  strong commitment to sustainable development and protecting
                  our environment. Over time, LASPEMA grew and changed into what
                  we now know as LASISMA - the Lagos State Informal Space
                  Management Authority. This change shows how the agency has
                  become more focused on handling setbacks and managing informal
                  urban spaces around Lagos State, while still keeping its
                  important job of watching over our environment and city
                  planning.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mandate">
          <div className="div-9">
            <div className="text-inner-7">
              <div className="text-wrapper-107">Our Mandate</div>

              <p className="LASISMA-operates">
                <span className="text-wrapper-103">LASISMA</span>

                <span className="text-wrapper-102">
                  {" "}
                  operates under the Lagos State Urban and Regional Development
                  Law 2019, with authority to determine locations for
                  infrastructure and economic activities, and regulate urban
                  furniture placement, dimensions, and appearance. The agency
                  serves as guardian of Lagos State&#39;s urban environment,
                  ensuring sustainable development that prioritizes community
                  welfare and environmental preservation.
                </span>
              </p>

              <LearnMoreButton className="learn-more-button-instance" />
            </div>
          </div>

          <div className="mission-frame-2">
            <img
              className="mission-image"
              alt="Mission image"
              src="/img/mission-image-subtract-1.png"
            />

            <img
              className="rectangle"
              alt="Rectangle"
              src="/img/rectangle-5-2.png"
            />
          </div>
        </div>

        <div className="history">
          <div className="mission-frame-3" />

          <div className="text-outer-7">
            <div className="LASISMA-s-mandate-wrapper">
              <p className="LASISMA-s-mandate">
                <span className="text-wrapper-103">LASISMA&#39;s</span>

                <span className="text-wrapper-102">
                  {" "}
                  mandate encompasses comprehensive urban planning oversight in
                  Lagos State. The agency determines strategic locations for
                  infrastructure and economic hubs while regulating all aspects
                  of urban furniture—from placement to appearance. As
                  environmental guardians, they ensure every development
                  decision balances economic growth with sustainability and
                  community needs, maintaining Lagos State&#39;s urban integrity
                  through strict compliance with the 2019 Urban and Regional
                  Development Law. Beyond regulatory oversight,{" "}
                </span>

                <span className="text-wrapper-103">LASISMA</span>

                <span className="text-wrapper-102">
                  {" "}
                  actively collaborates with local communities and stakeholders
                  to foster inclusive urban development. The agency conducts
                  environmental impact assessments, monitors compliance with
                  zoning regulations, and facilitates public participation in
                  planning processes.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="history-2">
          <div className="text-outer-7">
            <div className="through-strategic-wrapper">
              <p className="through-strategic">
                <span className="text-wrapper-102">
                  Through strategic partnerships with government agencies,
                  private developers, and civil society organizations,{" "}
                </span>

                <span className="text-wrapper-103">LASISMA</span>

                <span className="text-wrapper-102">
                  {" "}
                  creates frameworks that promote equitable access to urban
                  resources while preserving Lagos State&#39;s natural heritage
                  and cultural landscape for future generations.
                  <br />
                </span>

                <span className="text-wrapper-103">LASISMA&#39;s</span>

                <span className="text-wrapper-102">
                  {" "}
                  operational approach emphasizes data-driven decision-making
                  and innovative urban solutions to address Lagos State&#39;s
                  rapid growth challenges. The agency utilizes advanced mapping
                  technologies, conducts regular environmental audits, and
                  implements adaptive management strategies to respond to
                  emerging urban pressures. By integrating climate resilience
                  into planning protocols and promoting green infrastructure
                  development,{" "}
                </span>

                <span className="text-wrapper-103">LASISMA</span>

                <span className="text-wrapper-102">
                  {" "}
                  ensures that Lagos State remains a model for sustainable
                  urbanization across West Africa and beyond.
                </span>
              </p>
            </div>
          </div>

          <div className="mission-frame-4" />
        </div>
      </div>

      <DataBox className="data-box-instance" />
      <div className="hero-section">
        <div className="hero-outer">
          <div className="quick-links">
            <div className="div-11">
              <div className="text-wrapper-119">REPORT A VIOLATION</div>

              <ArrowDownIcon3
                className="icon-instance-node-2"
                color="#E83B50"
              />
            </div>

            <div className="div-11">
              <p className="GET-LICENSED">
                <span className="text-wrapper-86">GET LICENSED</span>

                <span className="text-wrapper-87">{""}</span>
              </p>

              <ArrowUpRightIcon147
                className="icon-instance-node-2"
                color="#26824A"
              />
            </div>
          </div>

          <div className="hero-inner">
            <div className="hero-text">
              <p className="lagos-state-informal">
                <span className="text-wrapper-120">Lagos State</span>

                <span className="text-wrapper-102">&nbsp;</span>

                <span className="text-wrapper-121">
                  Informal Space Management Authority
                </span>
              </p>

              <div className="typing">
                <p className="text-wrapper-122">
                  ...revolutionizing and refining Lagos urban face
                </p>
              </div>
            </div>

            <div className="search">
              <div className="search-input" />

              <SearchButton
                className="design-component-instance-node-3"
                icon={
                  <ArrowUpRightIcon147
                    className="arrow-up-right-icon-2"
                    color="white"
                  />
                }
                text="SEARCH"
              />
            </div>

            <div className="lgas-carousel">
              <div className="carousel-6">
                <div className="div-13">
                  <EpArrowLeft1
                    className="icon-instance-node-4"
                    color="white"
                  />
                </div>

                <div className="lgas-outer">
                  <div className="lgas-inner">
                    <Lga
                      className="LGA-18"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="AMUWO-ODOFIN"
                      text1="LGA"
                    />
                    <Lga className="LGA-3" text="APAPA IGANMU" text1="LCDA" />
                    <Lga
                      className="LGA-3"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="EGBE-IDIMU"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-3"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="EJIGBO"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-3"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="COKER-AGUDA"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-5"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="BARIGA"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-6"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="BADAGRY"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-7"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="BADAGRY WEST"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-8"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="AYOBO-IPAJA"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-10"
                      divClassName="LGA-2"
                      nameClassName="LGA-18-instance"
                      text="AMUWO-ODOFIN"
                      text1="LGA"
                      typeClassName="LGA-9"
                    />
                    <Lga
                      className="LGA-11"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="AGBADO OKE-ODO"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-12"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="APAPA-IGANMU"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-13"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="AGBOYI-KETU"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-14"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="APAPA"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-15"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="ALIMOSHO"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-16"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="AJEROMI-IFELODUN"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-17"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="AGEGE"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-19"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="AGEGE"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-20"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="EPE"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-21"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="EREDO"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-22"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="ETI-OSA EAST"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-23"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="ETI-OSA"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-24"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IBA"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-25"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IBEJU-LEKKI"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-26"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IBOGBO BAYEKU"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-27"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IFAKO-IJAIYE"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-28"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IFELODUN"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-29"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IGANDO-IKOTUN"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-30"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IJEDE"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-31"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IKEJA"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-32"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IKORODU"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-33"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IKORODU NORTH"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-34"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IKORODU WEST"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-35"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IKOSI EJIRIN"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-36"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IMOTA"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-37"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IRU-VICTORIA ISLAND"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-38"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="ISOLO"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-39"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="ITIRE-IKATE"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-40"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IKOSI-ISHERI"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-41"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="IKOYI-OBALENDE"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-42"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="KOSOFE"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-43"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="LAGOS ISLAND"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-44"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="LAGOS ISLAND EAST"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-45"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-4"
                      nameClassName="LGA-18-instance"
                      text="LAGOS MAINLAND"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-46"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="LEKKI"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-47"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="MOSAN-OKUNOLA"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-48"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="MUSHIN"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-49"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="ODI-OLOWO OJUWOYE"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-50"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="OJO"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-51"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="OJODU"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-52"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="OJOKORO"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-53"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="OLORUNDA"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-54"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="ONIGBONGBO"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-55"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="ORIADE"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-56"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="ORILE-AGEGE"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-57"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="OSHODI-ISOLO"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-58"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="OTO-AWORI"
                      text1="LCDA"
                    />
                    <Lga
                      className="LGA-59"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="SOMOLU"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-60"
                      divClassName="LGA-2"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="SURULERE"
                      text1="LGA"
                    />
                    <Lga
                      className="LGA-61"
                      innerLayoutClassName="LGA-instance"
                      nameClassName="LGA-18-instance"
                      text="YABA"
                      text1="LCDA"
                    />
                  </div>
                </div>

                <div className="div-13">
                  <EpArrowRight1
                    className="icon-instance-node-4"
                    color="white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-down-outer">
          <div className="scroll-down-inner">
            <div className="text-wrapper-123">Scroll Down</div>

            <ArrowDownIcon3 className="icon-instance-node-2" color="white" />
          </div>
        </div>
      </div>

      <NavBar
        LASPEMALogoRemixLaspemaLogoRemixClassName="nav-bar-2"
        LASPEMALogoRemixLaspemaLogoRemixClassNameOverride="nav-bar-3"
        className="nav-bar-instance"
        override={
          <IconamoonArrowDown2Light1 className="icon-instance-node-5" />
        }
        override1={
          <IconamoonArrowDown2Light1 className="icon-instance-node-5" />
        }
        override2={
          <ArrowUpRightIcon147 className="icon-instance-node-5" color="black" />
        }
        override3={
          <ArrowUpRightIcon147 className="icon-instance-node-5" color="black" />
        }
        override4={<User7 className="user" />}
        override5={<SearchIcon1 className="icon-instance-node-3" />}
        to="/services-overlay"
      />
      <EmergencyInfo className="emergency-info-instance" />
      <LasgStrip className="design-component-instance-node-2" />
    </div>
  );
};
