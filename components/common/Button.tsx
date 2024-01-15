import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export const buttonClassNames = 'rounded-md bg-primary p-4 text-white';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  isSubmit?: boolean;
  isUnstyled?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  className = '',
  isSubmit = false,
  isUnstyled = false,
  ...props
}) => (
  <button
    type={isSubmit ? 'submit' : 'button'}
    className={clsx(!isUnstyled && buttonClassNames, className)}
    {...props}
  >
    {children}
  </button>
);

export default Button;
