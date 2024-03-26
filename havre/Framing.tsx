import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Framing = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Framing icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5C1 3.89543 1.89543 3 3 3H8V5L3 5V10H1V5ZM21 5H16V3H21C22.1046 3 23 3.89543 23 5V10H21V5ZM3 14V19H8V21H3C1.89543 21 1 20.1046 1 19V14H3ZM21 19V14H23V19C23 20.1046 22.1046 21 21 21H16V19H21Z"
        fill={color}
      />
    </svg>
  );
};

export default Framing;
