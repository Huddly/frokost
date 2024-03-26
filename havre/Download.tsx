import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Download = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Download icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.37508 9.29289L11.0013 14.9191V2H13.0013V14.9191L18.6275 9.29289L20.0417 10.7071L13.062 17.6869C12.4762 18.2727 11.5264 18.2727 10.9406 17.6869L3.96086 10.7071L5.37508 9.29289ZM3 22H21V20H3V22Z"
        fill={color}
      />
    </svg>
  );
};

export default Download;
