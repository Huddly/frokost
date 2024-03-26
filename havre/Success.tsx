import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Success = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Success icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM7.70711 11.0707L10.6111 13.9747L16.2929 8.29289L17.7071 9.7071L11.5146 15.8996C11.0156 16.3986 10.2066 16.3986 9.70759 15.8996L6.29289 12.4849L7.70711 11.0707Z"
        fill={color}
      />
    </svg>
  );
};

export default Success;
