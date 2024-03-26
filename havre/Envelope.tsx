import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Envelope = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Envelope icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3C1.89543 3 1 3.89543 1 5V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V5C23 3.89543 22.1046 3 21 3H3ZM3 18V7.41421L10.5858 15C11.3668 15.781 12.6332 15.781 13.4142 15L21 7.41421V18H3ZM20.5858 5H3.41421L12 13.5858L20.5858 5Z"
        fill={color}
      />
    </svg>
  );
};

export default Envelope;
