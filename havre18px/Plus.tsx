import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Plus = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Plus icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 10V16H10V10L15.9998 10L15.9998 8L10 8L10 2H8L8 8L2.00006 8L2.00006 10L8 10Z"
        fill={color}
      />
    </svg>
  );
};

export default Plus;
