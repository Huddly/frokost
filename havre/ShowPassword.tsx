import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const ShowPassword = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'ShowPassword icon'}</title>
      <path
        d="M22.5 11.5C22.5 11.5 19.5 18 12 18C4.5 18 1.5 11.5 1.5 11.5C1.5 11.5 4.5 5 12 5C19.5 5 22.5 11.5 22.5 11.5Z"
        stroke="#262626"
        strokeWidth="2"
        fill={color}
      />
      <path
        d="M22.5 11.5C22.5 11.5 19.5 18 12 18C4.5 18 1.5 11.5 1.5 11.5C1.5 11.5 4.5 5 12 5C19.5 5 22.5 11.5 22.5 11.5Z"
        stroke="#262626"
        strokeWidth="2"
        fill={color}
      />
    </svg>
  );
};

export default ShowPassword;
