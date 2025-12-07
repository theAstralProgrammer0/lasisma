import React from "react";
import { ArrowUpRightIcon147 } from "../../icons/ArrowUpRightIcon147";
import "./style.css";

export const ServicesOverlay = (): JSX.Element => {
  return (
    <div className="services-overlay">
      <div className="inner-wrapper">
        <div className="inner-2">
          <div className="text-wrapper-58">Explore LASISMA Services</div>

          <div className="overlay-list-item">
            <div className="overlay-link">
              <div className="text-wrapper-59">IUS Bank</div>

              <ArrowUpRightIcon147
                className="arrow-up-right-icon"
                color="black"
              />
            </div>

            <p className="text-wrapper-60">
              Explore our repository of pre-approved informal urban spaces
            </p>
          </div>

          <div className="overlay-list-item-2">
            <div className="overlay-link">
              <div className="text-wrapper-59">Apply for License</div>

              <ArrowUpRightIcon147
                className="arrow-up-right-icon"
                color="black"
              />
            </div>

            <p className="text-wrapper-60">
              Upload documents, pay and await approval from the agency
            </p>
          </div>

          <div className="overlay-list-item-3">
            <div className="overlay-link">
              <div className="text-wrapper-59">Renew License</div>

              <ArrowUpRightIcon147
                className="arrow-up-right-icon"
                color="black"
              />
            </div>

            <p className="text-wrapper-60">
              Continue using your current space, renew expired license
            </p>
          </div>

          <div className="overlay-list-item-3">
            <div className="overlay-link">
              <div className="text-wrapper-59">Investment Opportunities</div>

              <ArrowUpRightIcon147
                className="arrow-up-right-icon"
                color="black"
              />
            </div>

            <p className="text-wrapper-60">
              Reach out to our management to discuss vested interests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
