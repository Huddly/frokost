import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Minus = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Minus icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9998 10L2.00006 10L2.00006 8L15.9998 8L15.9998 10Z"
        fill={color}
      />
    </svg>
  );
};

export default Minus;
