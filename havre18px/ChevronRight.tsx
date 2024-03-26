import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const ChevronRight = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'ChevronRight icon'}</title>
      <path
        d="M11.7631 9.2342L12.4702 9.94123L11.7631 9.2342ZM6.70719 15.7056L12.4702 9.94123L11.0559 8.52718L5.29281 14.2915L6.70719 15.7056ZM12.4701 8.05572L6.70711 2.29269L5.29289 3.70691L11.0559 9.46993L12.4701 8.05572ZM12.4702 9.94123C12.9908 9.42051 12.9908 8.57638 12.4701 8.05572L11.0559 9.46993C10.7956 9.2096 10.7956 8.78753 11.0559 8.52718L12.4702 9.94123Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronRight;
