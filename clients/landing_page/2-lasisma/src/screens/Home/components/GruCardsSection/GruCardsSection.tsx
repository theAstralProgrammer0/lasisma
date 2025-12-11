import React from "react";
import { SearchButton } from "../../../../components/SearchButton";
import { ArrowUpRightIcon147 } from "../../../../icons/ArrowUpRightIcon147";
import { UisArrowUpRight } from "../../../../components/UisArrowUpRight";

export const GruCardsContent = () => {
  return (
    <div className="card-holder">
      <div className="div-12">
        <p className="got-questions-read">
          <span className="text-wrapper-110">Got questions? Read our </span>
          <span className="text-wrapper-111">FAQ</span>
        </p>
        <div className="inner-3">
          <div className="text-wrapper-112">Browse available spaces</div>
          <p className="text-wrapper-113">Select and generate IUS license instantly</p>
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
          <span className="text-wrapper-110">Got questions? Read our </span>
          <span className="text-wrapper-111">FAQ</span>
        </p>
        <div className="inner-3">
          <div className="text-wrapper-114">Continue your operations</div>
          <p className="text-wrapper-113">Renew your existing license seamlessly</p>
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
          <span className="text-wrapper-110">Got questions? Read our </span>
          <span className="text-wrapper-111">FAQ</span>
        </p>
        <div className="inner-3">
          <div className="text-wrapper-115">Start your application</div>
          <div className="text-wrapper-113">Upload documents for&nbsp;&nbsp;approval</div>
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
  );
};

