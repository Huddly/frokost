import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Document = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Document icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 12.8285C39 12.0328 38.6839 11.2696 38.1211 10.707L37.8671 10.453C37.8626 10.4485 37.8581 10.4439 37.8536 10.4393L32.5607 5.14645C32.5483 5.13409 32.5358 5.122 32.5232 5.11019L32.2915 4.87854C31.7289 4.316 30.9658 4 30.1702 4.00006L11.9998 4.00144C10.343 4.00157 9 5.34468 9 7.00144V41C9 42.6568 10.3431 44 12 44L36 44C37.6569 44 39 42.6569 39 41L39 12.8285ZM30.0133 6.00007L11.9999 6.00144C11.4477 6.00148 11 6.44919 11 7.00144L11 41C11 41.5523 11.4477 42 12 42L36 42C36.5523 42 37 41.5523 37 41L37 12.9867C36.9329 12.9954 36.8639 13 36.7929 13H31.5C30.6716 13 30 12.3284 30 11.5V6.20711C30 6.13617 30.0046 6.06711 30.0133 6.00007ZM31 6.4154V11.5C31 11.7761 31.2239 12 31.5 12H36.5857L31 6.4154ZM15 17H25V15H15V17ZM33 23H15V21H33V23ZM15 27H33V25H15V27ZM33 31H15V29H33V31Z"
        fill={color}
      />
    </svg>
  );
};

export default Document;
