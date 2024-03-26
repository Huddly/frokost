import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const MenuKebab = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'MenuKebab icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6C11.1716 6 10.5 5.32843 10.5 4.5C10.5 3.67157 11.1716 3 12 3C12.8284 3 13.5 3.67157 13.5 4.5C13.5 5.32843 12.8284 6 12 6ZM12 21C11.1716 21 10.5 20.3284 10.5 19.5C10.5 18.6716 11.1716 18 12 18C12.8284 18 13.5 18.6716 13.5 19.5C13.5 20.3284 12.8284 21 12 21ZM10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12Z"
        fill={color}
      />
    </svg>
  );
};

export default MenuKebab;