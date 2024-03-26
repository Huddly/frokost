import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const SuccessFilled = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'SuccessFilled icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM7.70711 11.0707L10.6111 13.9747L16.2929 8.29289L17.7071 9.7071L11.5146 15.8996C11.0156 16.3986 10.2066 16.3986 9.70759 15.8996L6.29289 12.4849L7.70711 11.0707Z"
        fill={color}
      />
    </svg>
  );
};

export default SuccessFilled;