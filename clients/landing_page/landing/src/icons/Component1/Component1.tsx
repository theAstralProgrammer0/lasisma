/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Component1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`component-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.602 13.76L13.014 15.172L21.48 6.706L22.894 8.121L13.014 18.001L6.65 11.636L8.064 10.222L10.189 12.347L11.602 13.76ZM11.604 10.932L16.556 5.979L17.966 7.389L13.014 12.342L11.604 10.932ZM8.777 16.587L7.364 18L1 11.636L2.414 10.222L3.827 11.635L3.826 11.636L8.777 16.587Z"
        fill="#26824A"
      />
    </svg>
  );
};
