import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const WarningFilled = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'WarningFilled icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13 6L13 10.6667V14H11V10.6667L11 6L13 6ZM13 17V16H11V17V18H13V17Z"
        fill={color}
      />
    </svg>
  );
};

export default WarningFilled;
