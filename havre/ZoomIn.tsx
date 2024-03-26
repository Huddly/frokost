import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const ZoomIn = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'ZoomIn icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.99992 10C2.99992 13.866 6.13393 17 9.99992 17C13.8659 17 16.9999 13.866 16.9999 10C16.9999 6.13401 13.8659 3 9.99992 3C6.13393 3 2.99992 6.13401 2.99992 10ZM0.999924 10C0.999924 14.9706 5.02936 19 9.99992 19C12.1253 19 14.0786 18.2633 15.6184 17.0312L21.4256 22.8385L22.8398 21.4242L17.0325 15.6169C18.2637 14.0773 18.9999 12.1246 18.9999 10C18.9999 5.02944 14.9705 1 9.99992 1C5.02936 1 0.999924 5.02944 0.999924 10ZM11 11L14 11L14 9L11 9V6L9 6L9 9L6 9L6 11L9 11V14H11L11 11Z"
        fill={color}
      />
    </svg>
  );
};

export default ZoomIn;