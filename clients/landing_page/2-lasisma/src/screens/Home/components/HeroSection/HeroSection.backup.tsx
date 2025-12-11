import React from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon3 } from "../../../../icons/ArrowDownIcon3";
import { ArrowUpRightIcon147 } from "../../../../icons/ArrowUpRightIcon147";
import { EpArrowLeft1 } from "../../../../icons/EpArrowLeft1";
import { EpArrowRight1 } from "../../../../icons/EpArrowRight1";
import { SearchButton } from "../../../../components/SearchButton";
import { Lga } from "../../../../components/Lga";

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-outer">
        <div className="quick-links">
          <div className="div-11">
            <div className="text-wrapper-119">REPORT A VIOLATION</div>
            <ArrowDownIcon3 className="icon-instance-node-2" color="#E83B50" />
          </div>

          <div className="div-11">
            <p className="GET-LICENSED">
              <span className="text-wrapper-86">GET LICENSED</span>
              <span className="text-wrapper-87">{""}</span>
            </p>
            <ArrowUpRightIcon147 className="icon-instance-node-2" color="#26824A" />
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

          <LgaCarousel />
        </div>
      </div>

      <div className="scroll-down-outer">
        <div className="scroll-down-inner">
          <div className="text-wrapper-123">Scroll Down</div>
          <ArrowDownIcon3 className="icon-instance-node-2" color="white" />
        </div>
      </div>
    </div>
  );
};

const LgaCarousel = () => {
  const lgas = [
    { name: "AMUWO-ODOFIN", type: "LGA" },
    { name: "APAPA IGANMU", type: "LCDA" },
    { name: "EGBE-IDIMU", type: "LCDA" },
    { name: "EJIGBO", type: "LCDA" },
    { name: "COKER-AGUDA", type: "LCDA" },
    { name: "BARIGA", type: "LCDA" },
    { name: "BADAGRY", type: "LGA" },
    { name: "BADAGRY WEST", type: "LCDA" },
    { name: "AYOBO-IPAJA", type: "LCDA" },
    { name: "AGBADO OKE-ODO", type: "LCDA" },
    { name: "APAPA-IGANMU", type: "LCDA" },
    { name: "AGBOYI-KETU", type: "LCDA" },
    { name: "APAPA", type: "LGA" },
    { name: "ALIMOSHO", type: "LGA" },
    { name: "AJEROMI-IFELODUN", type: "LGA" },
    { name: "AGEGE", type: "LGA" },
    { name: "EPE", type: "LGA" },
    { name: "EREDO", type: "LCDA" },
    { name: "ETI-OSA EAST", type: "LCDA" },
    { name: "ETI-OSA", type: "LGA" },
    { name: "IBA", type: "LCDA" },
    { name: "IBEJU-LEKKI", type: "LGA" },
    { name: "IBOGBO BAYEKU", type: "LCDA" },
    { name: "IFAKO-IJAIYE", type: "LGA" },
    { name: "IFELODUN", type: "LCDA" },
    { name: "IGANDO-IKOTUN", type: "LCDA" },
    { name: "IJEDE", type: "LCDA" },
    { name: "IKEJA", type: "LGA" },
    { name: "IKORODU", type: "LGA" },
    { name: "IKORODU NORTH", type: "LCDA" },
    { name: "IKORODU WEST", type: "LCDA" },
    { name: "IKOSI EJIRIN", type: "LCDA" },
    { name: "IMOTA", type: "LCDA" },
    { name: "IRU-VICTORIA ISLAND", type: "LCDA" },
    { name: "ISOLO", type: "LCDA" },
    { name: "ITIRE-IKATE", type: "LCDA" },
    { name: "IKOSI-ISHERI", type: "LCDA" },
    { name: "IKOYI-OBALENDE", type: "LCDA" },
    { name: "KOSOFE", type: "LGA" },
    { name: "LAGOS ISLAND", type: "LGA" },
    { name: "LAGOS ISLAND EAST", type: "LGA" },
    { name: "LAGOS MAINLAND", type: "LGA" },
    { name: "LEKKI", type: "LCDA" },
    { name: "MOSAN-OKUNOLA", type: "LCDA" },
    { name: "MUSHIN", type: "LGA" },
    { name: "ODI-OLOWO OJUWOYE", type: "LCDA" },
    { name: "OJO", type: "LGA" },
    { name: "OJODU", type: "LCDA" },
    { name: "OJOKORO", type: "LCDA" },
    { name: "OLORUNDA", type: "LCDA" },
    { name: "ONIGBONGBO", type: "LCDA" },
    { name: "ORIADE", type: "LCDA" },
    { name: "ORILE-AGEGE", type: "LCDA" },
    { name: "OSHODI-ISOLO", type: "LGA" },
    { name: "OTO-AWORI", type: "LCDA" },
    { name: "SOMOLU", type: "LGA" },
    { name: "SURULERE", type: "LGA" },
    { name: "YABA", type: "LCDA" },
  ];

  return (
    <div className="lgas-carousel">
      <div className="carousel-6">
        <div className="div-13">
          <EpArrowLeft1 className="icon-instance-node-4" color="white" />
        </div>

        <div className="lgas-outer">
          <div className="lgas-inner">
            {lgas.map((lga, index) => (
              <Lga
                key={index}
                className={`LGA-${index + 18}`}
                text={lga.name}
                text1={lga.type}
              />
            ))}
          </div>
        </div>

        <div className="div-13">
          <EpArrowRight1 className="icon-instance-node-4" color="white" />
        </div>
      </div>
    </div>
  );
};

