import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const ExternalLink = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'ExternalLink icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4C3 2.89543 3.89543 2 5 2H12V4L5 4V19H20V12H22V19C22 20.1046 21.1046 21 20 21H5C3.89543 21 3 20.1046 3 19V4Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4C3 2.89543 3.89543 2 5 2H12V4L5 4V19H20V12H22V19C22 20.1046 21.1046 21 20 21H5C3.89543 21 3 20.1046 3 19V4Z"
        fill={color}
      />
    </svg>
  );
};

export default ExternalLink;
