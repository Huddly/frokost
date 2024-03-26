import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const WarningSmall = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'WarningSmall icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9ZM1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9ZM10 5V7.625L10 9.5L8 9.5V7.625L8 5H10ZM10 11V12V13L8 13V12L8 11L10 11Z"
        fill={color}
      />
    </svg>
  );
};

export default WarningSmall;
