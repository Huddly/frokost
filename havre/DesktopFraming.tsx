import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const DesktopFraming = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'DesktopFraming icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5C1 3.89543 1.89543 3 3 3H7V5H3V9H1V5ZM21 5H17V3H21C22.1046 3 23 3.89543 23 5V9H21V5ZM3 15V19H6V17C6 15.3431 7.34315 14 9 14H15C16.6569 14 18 15.3431 18 17V19H21V15H23V19C23 20.1046 22.1046 21 21 21H18H16V17C16 16.4477 15.5523 16 15 16H9C8.44772 16 8 16.4477 8 17V21H6H3C1.89543 21 1 20.1046 1 19V15H3ZM10 8.5C10 7.39543 10.8954 6.5 12 6.5C13.1046 6.5 14 7.39543 14 8.5C14 9.60457 13.1046 10.5 12 10.5C10.8954 10.5 10 9.60457 10 8.5ZM12 4.5C9.79086 4.5 8 6.29086 8 8.5C8 10.7091 9.79086 12.5 12 12.5C14.2091 12.5 16 10.7091 16 8.5C16 6.29086 14.2091 4.5 12 4.5Z"
        fill={color}
      />
    </svg>
  );
};

export default DesktopFraming;
