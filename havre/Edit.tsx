import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Edit = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Edit icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.008 5.56024C22.7941 6.34023 22.7968 7.61054 22.0139 8.39381L9.70734 20.7069L9.4513 20.9631L9.09058 20.9959L3.59058 21.4959L2.39551 21.6045L2.50415 20.4095L3.00416 14.9095L3.03693 14.5489L3.29294 14.2929L15.5886 1.99724C16.3675 1.21835 17.6296 1.21588 18.4115 1.99172L22.008 5.56024ZM20.5993 6.97997L17.0028 3.41145L15.4143 5L18.9972 8.58294L20.5993 6.97997ZM17.5834 9.99753L8.5488 19.0369L4.60458 19.3955L4.96316 15.4511L14 6.41421L17.5834 9.99753ZM23 21L13 21V19L23 19V21Z"
        fill={color}
      />
    </svg>
  );
};

export default Edit;
