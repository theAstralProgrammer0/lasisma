import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon147 } from "../../../../icons/ArrowUpRightIcon147";

export const InitiativesContent = () => {
  return (
    <>
      {/* HySPAC */}
      <div className="hy-SPAC">
        <div className="text-outer-4">
          <div className="text-inner-3">
            <Link className="text-wrapper-105" to="/hyspac-modal">
              HySPAC pumping machine
            </Link>
            <p className="text-wrapper-106">
              The Hybrid Solar Powered Air Compressor pumping machine is a total game changer for the vulcanizers of Lagos city. It brings dignity to the vulcanizing labor, reduces their stress, and promotes the overall health and well-being of Lagos' vulcanizers. In addition, it reduces air and noise pollution guaranteeing the reduction of carbon footprint in Lagos in line with the UN Framework Convention on climate-change to stabilize Green House Gas concentration in the earth's atmosphere.
            </p>
          </div>
        </div>
        <div className="image-31" />
      </div>

      {/* Solar Powered Kiosks */}
      <div className="div-8">
        <div className="image-32" />
        <div className="text-outer-4">
          <div className="text-inner-4">
            <Link className="text-wrapper-105" to="/solar-powered-kiosks-modal">
              Solar Powered Kiosks
            </Link>
            <p className="div-10">
              <span className="text-wrapper-102">
                Our urban face is witnessing disorderliness occasioned by unsustainable wooden kiosks (aka KANTA).{" "}
              </span>
              <span className="text-wrapper-103">LASISMA</span>
              <span className="text-wrapper-102">
                {" "}has designed and deployed Lagos standardized kiosks to provide a clean and sustainable workspace for informal vendors, potentially improving the aesthetics of our Informal Urban Spaces. This initiative utilizes solar energy reducing reliance on the grid and promoting the use of renewable energy in Lagos. The kiosks meet global standards in terms of design and functionality for the vendors.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Urban Agriculture */}
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
                {" "}has action plans to utilize the underused spaces underneath the high-tension power lines for urban agriculture, specifically for planting food crops such as tomatoes, habanero, e.t.c. Beyond enhancing food security, this initiative is sure to increase employment opportunities, Lagos' internal generated revenue (IGR), and the Nation's gross domestic product (GDP). One kilometer of high-tension corridor land has the potential to generate over{" "}
              </span>
              <span className="text-wrapper-103">N300,000,000</span>
              <span className="text-wrapper-102"> worth of habanero per annum.</span>
            </p>
          </div>
        </div>
        <div className="image-33" />
      </div>

      {/* Action Plans */}
      <div className="div-8">
        <div className="image-34" />
        <div className="text-outer-4">
          <div className="text-inner-5">
            <Link className="text-wrapper-105" to="/action-plans-modal">
              Action Plans
            </Link>
            <p className="div-10">
              <span className="text-wrapper-102">
                All the above mentioned initiatives will translate into the sustainable use of our Informal Urban Spaces (IUS) statewide. Orderliness, aesthetics, and urban resilience are derived from{" "}
              </span>
              <span className="text-wrapper-103">educated planning</span>
              <span className="text-wrapper-102"> and </span>
              <span className="text-wrapper-103">enforcement of laws</span>
              <span className="text-wrapper-102"> against the </span>
              <span className="text-wrapper-108">misuse and abuse</span>
              <span className="text-wrapper-102">
                {" "}of urban infrastructure. Currently, action plans are in the works to improve Alimosho, Ikorodu, Agege, and other prominent cities' urban face.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* See All Initiatives */}
      <div className="div-11">
        <div className="text-wrapper-109">SEE ALL INITIATIVES</div>
        <ArrowUpRightIcon147 className="icon-instance-node-2" color="#26824A" />
      </div>
    </>
  );
};

