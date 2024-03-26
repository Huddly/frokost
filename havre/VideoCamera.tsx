import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const VideoCamera = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'VideoCamera icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H16C17.1046 20 18 19.1046 18 18V16.0714L21.7253 17.1358C22.3641 17.3183 23 16.8386 23 16.1743V7.82573C23 7.16135 22.3641 6.68169 21.7253 6.86421L18 7.92857V6C18 4.89543 17.1046 4 16 4H3ZM18 10.0086V13.9914L21 14.8485V9.15146L18 10.0086ZM16 9.2543V6L3 6V18H16V14.7457V9.2543Z"
        fill={color}
      />
    </svg>
  );
};

export default VideoCamera;
