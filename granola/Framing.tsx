import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Framing = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Framing icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6C5.34315 6 4 7.34315 4 9V14H6V9C6 8.44772 6.44772 8 7 8H12V6H7ZM28.5 15C28.5 17.2091 26.7091 19 24.5 19C22.2909 19 20.5 17.2091 20.5 15C20.5 12.7909 22.2909 11 24.5 11C26.7091 11 28.5 12.7909 28.5 15ZM30.5 15C30.5 18.3137 27.8137 21 24.5 21C21.1863 21 18.5 18.3137 18.5 15C18.5 11.6863 21.1863 9 24.5 9C27.8137 9 30.5 11.6863 30.5 15ZM20 23C16.6863 23 14 25.6863 14 29V41H12V40H7C6.44772 40 6 39.5523 6 39L6 34H4V39C4 40.6568 5.34315 42 7 42L11 42L12 42L14 42H16H18H19H29H30H32H34H36H37H41C42.6569 42 44 40.6569 44 39V34H42V39C42 39.5523 41.5523 40 41 40H36V41H34V29C34 25.6863 31.3137 23 28 23H20ZM18 41H16V29C16 26.7909 17.7909 25 20 25H28C30.2091 25 32 26.7909 32 29V41H30V31H29V41L19 41V31H18V41ZM41 6C42.6569 6 44 7.34315 44 9V14L42 14V9C42 8.44772 41.5523 8 41 8L36 8V6H41Z"
        fill={color}
      />
    </svg>
  );
};

export default Framing;