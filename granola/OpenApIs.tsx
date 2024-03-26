import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const OpenApIs = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'OpenApIs icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10C4 8.34315 5.34315 7 7 7H41C42.6569 7 44 8.34315 44 10V37C44 38.6569 42.6569 40 41 40H7C5.34314 40 4 38.6569 4 37V10ZM7 9C6.44772 9 6 9.44772 6 10V12H42V10C42 9.44771 41.5523 9 41 9H7ZM6 37V13H42V37C42 37.5523 41.5523 38 41 38H7C6.44771 38 6 37.5523 6 37ZM9 11H13V10H9V11ZM34 11H36V10H34V11ZM37 11H39V10H37V11ZM18 24C18 22.8954 18.8954 22 20 22V21C20 18.7268 21.9535 17 24.2151 17C25.7434 17 27.1076 17.7757 27.8499 18.9731L26.1501 20.0269C25.7806 19.4309 25.0667 19 24.2151 19C22.9254 19 22 19.9595 22 21V22H28C29.1046 22 30 22.8954 30 24V30C30 31.1046 29.1046 32 28 32H20C18.8954 32 18 31.1046 18 30V24ZM28 24H20V30H28V24Z"
        fill={color}
      />
    </svg>
  );
};

export default OpenApIs;
