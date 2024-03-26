import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const PaneRight = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'PaneRight icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 21V3L20 3V21H22ZM9.29289 18.6249L14.9191 12.9987H2V10.9987L14.9191 10.9987L9.29289 5.37247L10.7071 3.95826L17.6869 10.938C18.2727 11.5238 18.2727 12.4736 17.6869 13.0594L10.7071 20.0391L9.29289 18.6249Z"
        fill={color}
      />
    </svg>
  );
};

export default PaneRight;
