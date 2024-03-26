import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Success = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Success icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9ZM1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9ZM6.16666 8.24377L8.02778 9.90837L11.8333 6.50464L13.1667 7.99536L8.83332 11.8711C8.37464 12.2814 7.68091 12.2814 7.22223 11.8711L4.83334 9.73449L6.16666 8.24377Z"
        fill={color}
      />
    </svg>
  );
};

export default Success;
