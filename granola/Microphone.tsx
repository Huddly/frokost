import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Microphone = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Microphone icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 11C14 5.47715 18.4772 1 24 1C29.5228 1 34 5.47715 34 11V23C34 28.5228 29.5228 33 24 33C18.4772 33 14 28.5228 14 23V11ZM24 3C19.5817 3 16 6.58172 16 11V12H20V14H16V16H20V18H16V20H20V22H16V23C16 27.4183 19.5817 31 24 31C28.4183 31 32 27.4183 32 23V22H28V20H32V18H28V16H32V14H28V12H32V11C32 6.58172 28.4183 3 24 3ZM12 18V23C12 29.6274 17.3726 35 24 35C30.6274 35 36 29.6274 36 23V18H38V23C38 29.7022 33.2904 35.3045 27 36.6778V37V40V41V45H32V47H16V45H21V41V40V37V36.6778C14.7096 35.3045 10 29.7022 10 23V18H12ZM22 45H26V41H22V45ZM26 37V40H22V37H24H26Z"
        fill={color}
      />
    </svg>
  );
};

export default Microphone;