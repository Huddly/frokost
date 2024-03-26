import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Check = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Check icon'}</title>
      <path
        d="M7.39016 12.1098L6.68306 11.4027L7.39016 12.1098ZM6.85983 12.1098L7.56694 11.4027L6.85983 12.1098ZM8.09727 12.8169L16.4571 4.45711L15.0429 3.04289L6.68306 11.4027L8.09727 12.8169ZM7.56694 11.4027L2.95711 6.79289L1.54289 8.20711L6.15273 12.8169L7.56694 11.4027ZM6.68306 11.4027C6.92714 11.1587 7.32286 11.1587 7.56694 11.4027L6.15273 12.8169C6.6897 13.3539 7.5603 13.3539 8.09727 12.8169L6.68306 11.4027Z"
        fill={color}
      />
    </svg>
  );
};

export default Check;
