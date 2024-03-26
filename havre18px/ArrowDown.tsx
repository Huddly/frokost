import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const ArrowDown = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'ArrowDown icon'}</title>
      <path
        d="M8.76436 14.2643L8.05733 14.9715L8.76436 14.2643ZM9.23573 14.2643L8.52863 13.5572L9.23573 14.2643ZM2.29297 9.20849L8.05733 14.9715L9.47138 13.5572L3.70703 7.79411L2.29297 9.20849ZM9.94284 14.9714L15.7059 9.20841L14.2916 7.79419L8.52863 13.5572L9.94284 14.9714ZM10.0001 14L10.0001 2L8.00006 2L8.00006 14H10.0001ZM8.05733 14.9715C8.57804 15.4921 9.42218 15.4921 9.94284 14.9714L8.52863 13.5572C8.78896 13.2969 9.21102 13.2969 9.47138 13.5572L8.05733 14.9715Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown;