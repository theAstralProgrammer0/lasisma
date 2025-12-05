/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const EpArrowRight = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`ep-arrow-right ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.32601 2.333C5.23878 2.4223 5.18994 2.54217 5.18994 2.667C5.18994 2.79183 5.23878 2.91171 5.32601 3.001L10.199 8L5.32601 12.998C5.23878 13.0873 5.18994 13.2072 5.18994 13.332C5.18994 13.4568 5.23878 13.5767 5.32601 13.666C5.3684 13.7095 5.41909 13.7442 5.47508 13.7678C5.53108 13.7914 5.59123 13.8036 5.65201 13.8036C5.71278 13.8036 5.77294 13.7914 5.82893 13.7678C5.88492 13.7442 5.93561 13.7095 5.97801 13.666L11.16 8.349C11.251 8.25563 11.302 8.13039 11.302 8C11.302 7.86961 11.251 7.74437 11.16 7.651L5.97801 2.334C5.93561 2.29046 5.88492 2.25585 5.82893 2.23222C5.77294 2.20859 5.71278 2.19641 5.65201 2.19641C5.59123 2.19641 5.53108 2.20859 5.47508 2.23222C5.41909 2.25585 5.3684 2.29046 5.32601 2.334V2.333Z"
        fill="black"
      />
    </svg>
  );
};
