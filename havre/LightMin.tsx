import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const LightMin = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'LightMin icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 2V4H11V2H13ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM13 22V20H11V22H13ZM22 13H20V11H22V13ZM2 13H4V11H2V13ZM19.7774 5.63606L18.3632 7.05028L16.949 5.63606L18.3632 4.22185L19.7774 5.63606ZM5.63664 19.7782L7.05086 18.364L5.63664 16.9498L4.22243 18.364L5.63664 19.7782ZM18.3632 19.7782L16.949 18.3639L18.3632 16.9497L19.7774 18.3639L18.3632 19.7782ZM4.22243 5.63603L5.63664 7.05025L7.05086 5.63603L5.63664 4.22182L4.22243 5.63603Z"
        fill={color}
      />
    </svg>
  );
};

export default LightMin;
