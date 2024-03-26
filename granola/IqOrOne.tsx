import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IqOrOne = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'IqOrOne icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 11C2.34315 11 1 12.3431 1 14V34C1 35.6569 2.34315 37 4 37H39C40.6569 37 42 35.6569 42 34V32.9286L45.7905 33.7408C46.413 33.8742 47 33.3997 47 32.763V15.237C47 14.6003 46.413 14.1258 45.7905 14.2592L42 15.0714V14C42 12.3431 40.6569 11 39 11H4ZM40 16.3084V31.6916V34C40 34.5523 39.5523 35 39 35H28V32.5C28 31.1193 26.8807 30 25.5 30H3V14C3 13.4477 3.44771 13 4 13H39C39.5523 13 40 13.4477 40 14V16.3084ZM45 31.526L42 30.8832V17.1168L45 16.474V31.526ZM3 31V34C3 34.5523 3.44772 35 4 35H27V32.5C27 31.6716 26.3284 31 25.5 31H3ZM18 17H20V19H18V17ZM26 17H24V19H26V17ZM18 23V21H25.3672H26V23H25.3672H18ZM20 25H18V27H20V25ZM24 25H26V27H24V25Z"
        fill={color}
      />
    </svg>
  );
};

export default IqOrOne;