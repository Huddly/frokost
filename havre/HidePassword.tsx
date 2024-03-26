import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const HidePassword = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'HidePassword icon'}</title>
      <path
        d="M9.5 14L9 18M14.5 14L15 18M5.5 12.5L3 16M18.5 12.5L21 16M22.5 7.5C22.5 7.5 19.5 14 12 14C4.5 14 1.5 7.5 1.5 7.5"
        stroke="#262626"
        strokeWidth="2"
        fill={color}
      />
    </svg>
  );
};

export default HidePassword;
