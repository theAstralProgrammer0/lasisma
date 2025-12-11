import React from "react";
import { ArrowDownIcon3 } from "../../../../icons/ArrowDownIcon3";
import { ArrowUpRightIcon147 } from "../../../../icons/ArrowUpRightIcon147";
import { EpArrowLeft1 } from "../../../../icons/EpArrowLeft1";
import { EpArrowRight1 } from "../../../../icons/EpArrowRight1";
import { SearchButton } from "../../../../components/SearchButton";
import { Lga } from "../../../../components/Lga";

export const HeroSectionContent = () => {
  return (
    <>
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
    </>
  );
};

const LgaCarousel = () => {
  const lgas = [
    "AMUWO-ODOFIN", "APAPA IGANMU", "EGBE-IDIMU", "EJIGBO", "COKER-AGUDA",
    "BARIGA", "BADAGRY", "BADAGRY WEST", "AYOBO-IPAJA", "AGBADO OKE-ODO",
    "APAPA-IGANMU", "AGBOYI-KETU", "APAPA", "ALIMOSHO", "AJEROMI-IFELODUN",
    "AGEGE", "EPE", "EREDO", "ETI-OSA EAST", "ETI-OSA", "IBA", "IBEJU-LEKKI",
    "IBOGBO BAYEKU", "IFAKO-IJAIYE", "IFELODUN", "IGANDO-IKOTUN", "IJEDE",
    "IKEJA", "IKORODU", "IKORODU NORTH", "IKORODU WEST", "IKOSI EJIRIN",
    "IMOTA", "IRU-VICTORIA ISLAND", "ISOLO", "ITIRE-IKATE", "IKOSI-ISHERI",
    "IKOYI-OBALENDE", "KOSOFE", "LAGOS ISLAND", "LAGOS ISLAND EAST",
    "LAGOS MAINLAND", "LEKKI", "MOSAN-OKUNOLA", "MUSHIN", "ODI-OLOWO OJUWOYE",
    "OJO", "OJODU", "OJOKORO", "OLORUNDA", "ONIGBONGBO", "ORIADE", "ORILE-AGEGE",
    "OSHODI-ISOLO", "OTO-AWORI", "SOMOLU", "SURULERE", "YABA"
  ];

  const lgaTypes = [
    "LGA", "LCDA", "LCDA", "LCDA", "LCDA", "LCDA", "LGA", "LCDA", "LCDA", "LCDA",
    "LCDA", "LCDA", "LGA", "LGA", "LGA", "LGA", "LGA", "LCDA", "LCDA", "LGA",
    "LCDA", "LGA", "LCDA", "LGA", "LCDA", "LCDA", "LCDA", "LGA", "LGA", "LCDA",
    "LCDA", "LCDA", "LCDA", "LCDA", "LCDA", "LCDA", "LCDA", "LCDA", "LGA", "LGA",
    "LGA", "LGA", "LCDA", "LCDA", "LGA", "LCDA", "LGA", "LCDA", "LCDA", "LCDA",
    "LCDA", "LCDA", "LCDA", "LGA", "LCDA", "LGA", "LGA", "LCDA"
  ];

  return (
    <div className="lgas-carousel">
      <div className="carousel-6">
        <div className="div-13">
          <EpArrowLeft1 className="icon-instance-node-4" color="white" />
        </div>

        <div className="lgas-outer">
          <div className="lgas-inner">
            {lgas.map((lga, index) => {
              // Generate the correct className based on the original pattern
              const className = `LGA-${index + 18}`;
              return (
                <Lga
                  key={index}
                  className={className}
                  text={lga}
                  text1={lgaTypes[index] || "LCDA"}
                />
              );
            })}
          </div>
        </div>

        <div className="div-13">
          <EpArrowRight1 className="icon-instance-node-4" color="white" />
        </div>
      </div>
    </div>
  );
};

