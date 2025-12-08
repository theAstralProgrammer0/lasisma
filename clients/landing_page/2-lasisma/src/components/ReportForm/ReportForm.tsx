/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CloudUploadIcon } from "../CloudUploadIcon";
import { IconamoonArrowDown } from "../IconamoonArrowDown";
import "./style.css";

interface Props {
  className: any;
  override: JSX.Element;
  override1: JSX.Element;
  inputType: string;
  inputType1: string;
  inputType2: string;
}

export const ReportForm = ({
  className,
  override = <IconamoonArrowDown />,
  override1 = <CloudUploadIcon />,
  inputType = "text",
  inputType1 = "text",
  inputType2 = "email",
}: Props): JSX.Element => {
  return (
    <div className={`report-form ${className}`}>
      <div className="head">
        <div className="heading">
          <div className="text-wrapper-9">Report A Violation</div>
        </div>

        <div className="sub-heading">
          <p className="text-wrapper-10">Fill the form below and submit</p>
        </div>
      </div>

      <div className="div-wrapper-2">
        <div className="div-2">
          <div className="div-3">
            <div className="text-wrapper-11">Name</div>
          </div>

          <div className="div-4">
            <div className="div-5" />

            <input
              className="input"
              placeholder="First Name"
              type={inputType}
            />
          </div>

          <div className="div-4">
            <div className="div-5" />

            <input
              className="input"
              placeholder="Last Name"
              type={inputType1}
            />
          </div>
        </div>
      </div>

      <div className="div-wrapper-2">
        <div className="div-2">
          <div className="div-3">
            <label className="text-wrapper-11" htmlFor="input-2">
              Email
            </label>
          </div>

          <div className="div-4">
            <div className="div-5" />

            <input
              className="input"
              id="input-2"
              placeholder="example@email.com"
              type={inputType2}
            />
          </div>
        </div>
      </div>

      <div className="div-wrapper-2">
        <div className="div-2">
          <div className="div-3">
            <div className="text-wrapper-11">Location</div>

            <a
              className="choose-on-map-link"
              href="https://maps.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="text-wrapper-12">Choose on map</div>
            </a>
          </div>

          <div className="div-4">
            <div className="div-5" />

            <div className="div-wrapper-3">
              <div className="text-wrapper-13">Street</div>
            </div>
          </div>

          <div className="div-4">
            <div className="LGA-dropdown">{override}</div>

            <div className="div-wrapper-3">
              <div className="text-wrapper-13">L.G.A</div>
            </div>
          </div>
        </div>
      </div>

      <div className="div-wrapper-4">
        <div className="div-6">
          <div className="description">
            <div className="description-text">
              <div className="description-2">Describe the scene...</div>
            </div>
          </div>

          <div className="div-wrapper-5">
            <div className="text-wrapper-11">Description</div>
          </div>
        </div>
      </div>

      <div className="div-wrapper-4">
        <div className="div-6">
          <div className="upload">
            <div className="browse">
              {override1}
              <div className="text-wrapper-14">Browse Files</div>

              <p className="text-wrapper-15">Drag and drop files here</p>
            </div>
          </div>

          <div className="div-wrapper-5">
            <div className="text-wrapper-11">Upload an Image</div>
          </div>
        </div>
      </div>

      <button className="submit">
        <button className="submit-button">
          <div className="text-wrapper-16">Submit</div>
        </button>
      </button>
    </div>
  );
};

ReportForm.propTypes = {
  inputType: PropTypes.string,
  inputType1: PropTypes.string,
  inputType2: PropTypes.string,
};
