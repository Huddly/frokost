import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const SpeakerFraming = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'SpeakerFraming icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5C14 2.79086 15.7909 1 18 1H19C21.2091 1 23 2.79086 23 5V6C23 8.20914 21.2091 10 19 10H15H14V9V5ZM18 3C16.8954 3 16 3.89543 16 5V8H19C20.1046 8 21 7.10457 21 6V5C21 3.89543 20.1046 3 19 3H18ZM1 17C1 14.7909 2.79086 13 5 13H12C14.2091 13 16 14.7909 16 17V21C16 22.1046 15.1046 23 14 23H3C1.89543 23 1 22.1046 1 21V17ZM5 15C3.89543 15 3 15.8954 3 17V21H14V17C14 15.8954 13.1046 15 12 15H5ZM6.5 7.5C6.5 6.39543 7.39543 5.5 8.5 5.5C9.60457 5.5 10.5 6.39543 10.5 7.5C10.5 8.60457 9.60457 9.5 8.5 9.5C7.39543 9.5 6.5 8.60457 6.5 7.5ZM8.5 3.5C6.29086 3.5 4.5 5.29086 4.5 7.5C4.5 9.70914 6.29086 11.5 8.5 11.5C10.7091 11.5 12.5 9.70914 12.5 7.5C12.5 5.29086 10.7091 3.5 8.5 3.5Z"
        fill={color}
      />
    </svg>
  );
};

export default SpeakerFraming;
