import React from "react";
import { LaspemaLogoRemix } from "../../../../components/LaspemaLogoRemix";
import { LearnMoreButton } from "../../../../components/LearnMoreButton";

export const MvhmContent = () => {
  return (
    <>
      {/* About Us */}
      <div className="revolutionize">
        <div className="text-outer-6">
          <div className="text-inner-6">
            <div className="text-wrapper-107">About Us</div>
            <p className="text-wrapper-118">Revolutionizing and Refining Lagos' Urban Face</p>
            <p className="LASISMA-regulates">
              <span className="text-wrapper-103">LASISMA</span>
              <span className="text-wrapper-102">
                {" "}regulates and coordinates Informal Urban and Open Spaces (IUS &amp; IOS) in Lagos State, monitoring setbacks (roads, railways, pipelines, wetlands, etc.) to prevent misuse. The agency ensures urban aesthetics, coordinates site selection for informal businesses like vulcanizing and petty trading, and enforces compliance with operational licenses.
              </span>
            </p>
            <LearnMoreButton className="learn-more-button-instance" />
          </div>
        </div>
        <img className="image-subtract" alt="Image subtract" src="/img/image-subtract.png" />
        <LaspemaLogoRemix
          className="LASPEMA-logo"
          hasLagosLogo={false}
          hasMiddleEllipse={false}
          hasOutermostEllipse={false}
          hasTextRing={false}
        />
      </div>

      {/* History */}
      <div className="history">
        <div className="mission-frame" />
        <div className="text-outer-7">
          <div className="LASISMA-was-wrapper">
            <p className="LASISMA-was">
              <span className="text-wrapper-103">LASISMA</span>
              <span className="text-wrapper-102"> was originally established as </span>
              <span className="text-wrapper-108">LASPEMA</span>
              <span className="text-wrapper-102">
                {" "}back in 2001 under the Ministry of Physical Planning and Environment. This happened during the forward-thinking leadership of Governor Emeritus Asiwaju Bola Ahmed Tinubu, who now serves as President of Nigeria. The agency started with a strong commitment to sustainable development and protecting our environment. Over time, LASPEMA grew and changed into what we now know as LASISMA - the Lagos State Informal Space Management Authority. This change shows how the agency has become more focused on handling setbacks and managing informal urban spaces around Lagos State, while still keeping its important job of watching over our environment and city planning.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Our Mandate */}
      <div className="mandate">
        <div className="div-9">
          <div className="text-inner-7">
            <div className="text-wrapper-107">Our Mandate</div>
            <p className="LASISMA-operates">
              <span className="text-wrapper-103">LASISMA</span>
              <span className="text-wrapper-102">
                {" "}operates under the Lagos State Urban and Regional Development Law 2019, with authority to determine locations for infrastructure and economic activities, and regulate urban furniture placement, dimensions, and appearance. The agency serves as guardian of Lagos State's urban environment, ensuring sustainable development that prioritizes community welfare and environmental preservation.
              </span>
            </p>
            <LearnMoreButton className="learn-more-button-instance" />
          </div>
        </div>
        <div className="mission-frame-2">
          <img className="mission-image" alt="Mission image" src="/img/mission-image-subtract-1.png" />
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-5-2.png" />
        </div>
      </div>

      {/* Expanded Mandate */}
      <div className="history">
        <div className="mission-frame-3" />
        <div className="text-outer-7">
          <div className="LASISMA-s-mandate-wrapper">
            <p className="LASISMA-s-mandate">
              <span className="text-wrapper-103">LASISMA's</span>
              <span className="text-wrapper-102">
                {" "}mandate encompasses comprehensive urban planning oversight in Lagos State. The agency determines strategic locations for infrastructure and economic hubs while regulating all aspects of urban furniture—from placement to appearance. As environmental guardians, they ensure every development decision balances economic growth with sustainability and community needs, maintaining Lagos State's urban integrity through strict compliance with the 2019 Urban and Regional Development Law. Beyond regulatory oversight,{" "}
              </span>
              <span className="text-wrapper-103">LASISMA</span>
              <span className="text-wrapper-102">
                {" "}actively collaborates with local communities and stakeholders to foster inclusive urban development. The agency conducts environmental impact assessments, monitors compliance with zoning regulations, and facilitates public participation in planning processes.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Approach */}
      <div className="history-2">
        <div className="text-outer-7">
          <div className="through-strategic-wrapper">
            <p className="through-strategic">
              <span className="text-wrapper-102">
                Through strategic partnerships with government agencies, private developers, and civil society organizations,{" "}
              </span>
              <span className="text-wrapper-103">LASISMA</span>
              <span className="text-wrapper-102">
                {" "}creates frameworks that promote equitable access to urban resources while preserving Lagos State's natural heritage and cultural landscape for future generations.
                <br />
              </span>
              <span className="text-wrapper-103">LASISMA's</span>
              <span className="text-wrapper-102">
                {" "}operational approach emphasizes data-driven decision-making and innovative urban solutions to address Lagos State's rapid growth challenges. The agency utilizes advanced mapping technologies, conducts regular environmental audits, and implements adaptive management strategies to respond to emerging urban pressures. By integrating climate resilience into planning protocols and promoting green infrastructure development,{" "}
              </span>
              <span className="text-wrapper-103">LASISMA</span>
              <span className="text-wrapper-102">
                {" "}ensures that Lagos State remains a model for sustainable urbanization across West Africa and beyond.
              </span>
            </p>
          </div>
        </div>
        <div className="mission-frame-4" />
      </div>
    </>
  );
};

