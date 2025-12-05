/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const EpArrowLeft = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`ep-arrow-left ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.52195 2.334L4.33995 7.65C4.24894 7.74338 4.198 7.86861 4.198 7.999C4.198 8.12939 4.24894 8.25463 4.33995 8.348L9.52195 13.666C9.56435 13.7095 9.61503 13.7442 9.67103 13.7678C9.72702 13.7914 9.78717 13.8036 9.84795 13.8036C9.90872 13.8036 9.96888 13.7914 10.0249 13.7678C10.0809 13.7442 10.1316 13.7095 10.1739 13.666C10.2612 13.5767 10.31 13.4568 10.31 13.332C10.31 13.2072 10.2612 13.0873 10.1739 12.998L5.30095 7.999L10.1739 3.001C10.2609 2.91175 10.3095 2.79209 10.3095 2.6675C10.3095 2.54291 10.2609 2.42325 10.1739 2.334C10.1316 2.29046 10.0809 2.25585 10.0249 2.23222C9.96888 2.20859 9.90872 2.19641 9.84795 2.19641C9.78717 2.19641 9.72702 2.20859 9.67103 2.23222C9.61503 2.25585 9.56435 2.29046 9.52195 2.334Z"
        fill="black"
      />
    </svg>
  );
};
