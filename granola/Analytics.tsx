import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Analytics = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Analytics icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10C4 8.34315 5.34315 7 7 7H41C42.6569 7 44 8.34315 44 10V37C44 38.6569 42.6569 40 41 40H7C5.34314 40 4 38.6569 4 37V10ZM7 9C6.44772 9 6 9.44772 6 10V12H42V10C42 9.44771 41.5523 9 41 9H7ZM6 37V13H42V37C42 37.5523 41.5523 38 41 38H7C6.44771 38 6 37.5523 6 37ZM9 11H13V10H9V11ZM34 11H36V10H34V11ZM37 11H39V10H37V11ZM15 20.0275C12.75 20.2762 11 22.1837 11 24.5C11 26.9853 13.0147 29 15.5 29C17.8163 29 19.7238 27.25 19.9725 25H15.5H15V24.5V20.0275ZM16 20.0275V24H19.9725C19.742 21.9142 18.0858 20.258 16 20.0275ZM9 24.5C9 20.9101 11.9101 18 15.5 18C19.0899 18 22 20.9101 22 24.5C22 28.0899 19.0899 31 15.5 31C11.9101 31 9 28.0899 9 24.5ZM31 24V30H29V24H31ZM27 30V26H25V30H27ZM35 21V30H33V21H35ZM39 30V24H37V30H39Z"
        fill={color}
      />
    </svg>
  );
};

export default Analytics;
