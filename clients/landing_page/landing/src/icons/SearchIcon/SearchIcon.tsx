/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const SearchIcon = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`search-icon ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21.0002 21L16.6572 16.657M16.6572 16.657C17.4001 15.9141 17.9894 15.0322 18.3914 14.0615C18.7935 13.0909 19.0004 12.0506 19.0004 11C19.0004 9.94939 18.7935 8.90908 18.3914 7.93845C17.9894 6.96782 17.4001 6.08588 16.6572 5.34299C15.9143 4.6001 15.0324 4.01081 14.0618 3.60877C13.0911 3.20672 12.0508 2.99979 11.0002 2.99979C9.9496 2.99979 8.90929 3.20672 7.93866 3.60877C6.96803 4.01081 6.08609 4.6001 5.34321 5.34299C3.84288 6.84332 3 8.87821 3 11C3 13.1218 3.84288 15.1567 5.34321 16.657C6.84354 18.1573 8.87842 19.0002 11.0002 19.0002C13.122 19.0002 15.1569 18.1573 16.6572 16.657Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
