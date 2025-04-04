import { ButtonHTMLAttributes } from 'react';

import { buttonStyle } from './TextButton.css';

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large' | 'xLarge';
  color?: 'red' | 'gray' | 'stroke';
  disabled?: boolean;
}

const TextButton = ({
  size,
  color = 'red',
  disabled = false,
  onClick,
  children,
}: TextButtonProps) => {
  return (
    <button
      className={buttonStyle({
        size,
        color,
        disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TextButton;
