import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const Chat = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title || 'Chat icon'}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C2.89543 2 2 2.89543 2 4V21.1849C2 22.5642 3.70477 23.2123 4.62111 22.1814L7.44907 19H20C21.1046 19 22 18.1046 22 17V4C22 2.89543 21.1046 2 20 2H4ZM4 4H20V17H7H6.55093L6.25259 17.3356L4 19.8698V4ZM7 11H9V9H7V11ZM11 11H13V9H11V11ZM17 11H15V9H17V11Z"
        fill={color}
      />
    </svg>
  );
};

export default Chat;
