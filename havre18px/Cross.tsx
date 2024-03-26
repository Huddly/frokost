import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Cross = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Cross icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00007 10.4142L13.918 15.3321L15.3322 13.9179L10.4143 9L15.3322 4.08211L13.918 2.66789L9.00008 7.58579L4.08218 2.66789L2.66797 4.08211L7.58586 9L2.66797 13.9179L4.08218 15.3321L9.00007 10.4142Z"
        fill={color}
      />
    </svg>
  );
};

export default Cross;
