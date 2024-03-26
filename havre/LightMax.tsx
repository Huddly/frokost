import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const LightMax = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3821_50171)">
        <title>{title || 'LightMax icon'}</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 0V3H11V0H13ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM13 24V21H11V24H13ZM24 13H21V11H24V13ZM0 13H3V11H0V13ZM21.1915 4.22182L19.0702 6.34314L17.6559 4.92892L19.7773 2.8076L21.1915 4.22182ZM4.22641 21.1924L6.34773 19.0711L4.93352 17.6569L2.8122 19.7782L4.22641 21.1924ZM19.7773 21.1924L17.6559 19.0711L19.0702 17.6569L21.1915 19.7782L19.7773 21.1924ZM2.8122 4.22177L4.93352 6.34309L6.34773 4.92888L4.22641 2.80756L2.8122 4.22177Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3821_50171">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LightMax;
