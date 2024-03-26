import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Search = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Search icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.0001 10C21.0001 13.866 17.8661 17 14.0001 17C10.1341 17 7.00008 13.866 7.00008 10C7.00008 6.13401 10.1341 3 14.0001 3C17.8661 3 21.0001 6.13401 21.0001 10ZM23.0001 10C23.0001 14.9706 18.9706 19 14.0001 19C11.8747 19 9.92137 18.2633 8.38158 17.0312L2.57437 22.8385L1.16016 21.4242L6.96753 15.6169C5.73629 14.0773 5.00008 12.1246 5.00008 10C5.00008 5.02944 9.02951 1 14.0001 1C18.9706 1 23.0001 5.02944 23.0001 10Z"
        fill={color}
      />
    </svg>
  );
};

export default Search;
