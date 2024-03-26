import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Usb = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Usb icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4C17 2.89543 17.8954 2 19 2H29C30.1046 2 31 2.89543 31 4V13C32.6569 13 34 14.3431 34 16V35C34 36.6569 32.6569 38 31 38H30V41C30 41.5523 29.5523 42 29 42H27V47H26V42H22L22 47H21L21 42H19C18.4477 42 18 41.5523 18 41V38H17C15.3431 38 14 36.6569 14 35V16C14 14.3431 15.3431 13 17 13V4ZM21 41H22H26H27H29V38H19V41H21ZM19 13H29V4L19 4V13ZM31 15H30H18H17C16.4477 15 16 15.4477 16 16V35C16 35.5523 16.4477 36 17 36H31C31.5523 36 32 35.5523 32 35V16C32 15.4477 31.5523 15 31 15Z"
        fill={color}
      />
    </svg>
  );
};

export default Usb;
