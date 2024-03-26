import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const GalleryView = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'GalleryView icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2C0.895431 2 0 2.89543 0 4V7H2V4H5V2H2ZM19 4H22V7H24V4C24 2.89543 23.1046 2 22 2H19V4ZM9 4H11V6.5H13V4H15V2H12H9V4ZM6.5 8C5.94772 8 5.5 8.44772 5.5 9C5.5 9.55228 5.94772 10 6.5 10C7.05228 10 7.5 9.55228 7.5 9C7.5 8.44772 7.05228 8 6.5 8ZM3.5 9C3.5 7.34315 4.84315 6 6.5 6C8.15685 6 9.5 7.34315 9.5 9C9.5 10.6569 8.15685 12 6.5 12C4.84315 12 3.5 10.6569 3.5 9ZM16.5 9C16.5 8.44772 16.9477 8 17.5 8C18.0523 8 18.5 8.44772 18.5 9C18.5 9.55228 18.0523 10 17.5 10C16.9477 10 16.5 9.55228 16.5 9ZM17.5 6C15.8431 6 14.5 7.34315 14.5 9C14.5 10.6569 15.8431 12 17.5 12C19.1569 12 20.5 10.6569 20.5 9C20.5 7.34315 19.1569 6 17.5 6ZM0 17C0 14.7909 1.79086 13 4 13H9C10.1947 13 11.2671 13.5238 12 14.3542C12.7329 13.5238 13.8053 13 15 13H20C22.2091 13 24 14.7909 24 17V19C24 20.1046 23.1046 21 22 21H13H12H11H2C0.89543 21 0 20.1046 0 19V17ZM11 19V17C11 15.8954 10.1046 15 9 15H4C2.89543 15 2 15.8954 2 17V19H11ZM13 19H22V17C22 15.8954 21.1046 15 20 15H15C13.8954 15 13 15.8954 13 17V19Z"
        fill={color}
      />
    </svg>
  );
};

export default GalleryView;
