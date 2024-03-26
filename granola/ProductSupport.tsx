import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const ProductSupport = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'ProductSupport icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 11C16 6.58172 19.5817 3 24 3C28.4183 3 32 6.58172 32 11V14.5V15V16.5C32 17.3284 31.3284 18 30.5 18H29V19H30.5C31.8807 19 33 17.8807 33 16.5V16C33.5523 16 34 15.5523 34 15V10C34 9.44772 33.5523 9 33 9H32.777C31.8675 4.99202 28.2832 2 24 2C19.7168 2 16.1325 4.99202 15.223 9H15C14.4477 9 14 9.44772 14 10V15C14 15.5523 14.4477 16 15 16C15.5523 16 16 15.5523 16 15V11ZM24 17C26.7614 17 29 14.7614 29 12C29 9.23858 26.7614 7 24 7C21.2386 7 19 9.23858 19 12C19 14.7614 21.2386 17 24 17ZM24 19C27.866 19 31 15.866 31 12C31 8.13401 27.866 5 24 5C20.134 5 17 8.13401 17 12C17 15.866 20.134 19 24 19ZM11 28C11 24.134 14.134 21 18 21H30C33.866 21 37 24.134 37 28V45H39V46H37H35H32L31 46L17 46H16H13H11H9V45H11V28ZM31 31V45H17L17 31H16L16 45H13V28C13 25.2386 15.2386 23 18 23H30C32.7614 23 35 25.2386 35 28V45H32V31H31Z"
        fill={color}
      />
    </svg>
  );
};

export default ProductSupport;
