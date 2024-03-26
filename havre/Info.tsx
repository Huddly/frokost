import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Info = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Info icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11 18L11 13.3333L11 10L13 10L13 13.3333L13 18L11 18ZM11 8L11 7L11 6L13 6L13 7L13 8L11 8Z"
        fill={color}
      />
    </svg>
  );
};

export default Info;