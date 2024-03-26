import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const SpeakerFraming = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'SpeakerFraming icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 5C31.2386 5 29 7.23858 29 10V18V19H30H39C41.7614 19 44 16.7614 44 14V10C44 7.23858 41.7614 5 39 5H34ZM31 10C31 8.34315 32.3431 7 34 7H39C40.6569 7 42 8.34315 42 10V14C42 15.6569 40.6569 17 39 17H31V10ZM7 6C5.34315 6 4 7.34315 4 9V14H6V9C6 8.44772 6.44772 8 7 8H12V6H7ZM24.5 15C24.5 17.2091 22.7091 19 20.5 19C18.2909 19 16.5 17.2091 16.5 15C16.5 12.7909 18.2909 11 20.5 11C22.7091 11 24.5 12.7909 24.5 15ZM26.5 15C26.5 18.3137 23.8137 21 20.5 21C17.1863 21 14.5 18.3137 14.5 15C14.5 11.6863 17.1863 9 20.5 9C23.8137 9 26.5 11.6863 26.5 15ZM16 23C12.6863 23 10 25.6863 10 29V40H7C6.44772 40 6 39.5523 6 39L6 34H4V39C4 40.6568 5.34315 42 7 42L8 42H10H12H29H30H31V29C31 25.6863 28.3137 23 25 23H16ZM12 41V40V29C12 26.7909 13.7909 25 16 25H25C27.2091 25 29 26.7909 29 29V41H27V31H26V41H15V31H14V41H12ZM44 39C44 40.6569 42.6569 42 41 42H36V40H41C41.5523 40 42 39.5523 42 39V34H44V39Z"
        fill={color}
      />
    </svg>
  );
};

export default SpeakerFraming;
