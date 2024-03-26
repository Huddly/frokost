import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const PaneLeft = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'PaneLeft icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3L2 21H4L4 3H2ZM14.7071 5.37508L9.08088 11.0013L22 11.0013V13.0013L9.08088 13.0013L14.7071 18.6275L13.2929 20.0417L6.31312 13.062C5.72733 12.4762 5.72733 11.5264 6.31312 10.9406L13.2929 3.96086L14.7071 5.37508Z"
        fill={color}
      />
    </svg>
  );
};

export default PaneLeft;
