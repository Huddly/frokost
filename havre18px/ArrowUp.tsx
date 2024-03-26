import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const ArrowUp = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'ArrowUp icon'}</title>
      <path
        d="M9.23443 3.73565L9.94145 3.02846L9.23443 3.73565ZM8.76305 3.73568L9.47015 4.44278L8.76305 3.73568ZM15.7058 8.79151L9.94145 3.02846L8.5274 4.44284L14.2918 10.2059L15.7058 8.79151ZM8.05594 3.02857L2.29292 8.79159L3.70713 10.2058L9.47015 4.44278L8.05594 3.02857ZM7.99872 4L7.99872 16L9.99872 16L9.99872 4L7.99872 4ZM9.94145 3.02846C9.42074 2.50786 8.5766 2.50791 8.05594 3.02857L9.47015 4.44278C9.20983 4.70311 8.78776 4.70313 8.5274 4.44284L9.94145 3.02846Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowUp;
