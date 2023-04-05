import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ImSpinner2 } from '@react-icons/all-files/im/ImSpinner2';

export interface ButtonProps {
  children?: React.ReactNode | React.ReactNode[];
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  variant?: 'solid' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

const defaultStyles =
  'px-6 py-2 text-xs tracking-wider transition-all duration-300 ease-in-out rounded-md border-2 flex items-center justify-center space-x-3 font-semibold';
const solidStyles =
  'bg-primary text-white border-primary shadow-primary/30 hover:shadow-md';
const outlineStyles =
  'text-primary border-primary hover:bg-primary/10 active:bg-primary/20 shadow-primary/20 hover:shadow-md';
const linkStyles =
  'text-primary hover:text-primary/80 active:text-primary/60 border-none';

const sizeClasses = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-6 py-2 text-xs',
  lg: 'px-8 py-3 text-base',
};

export const Button = (props: ButtonProps) => {
  const {
    disabled,
    children,
    isLoading,
    loadingText,
    iconLeft,
    iconRight,
    variant = 'solid',
    size = 'md',
    ...buttonProps
  } = props;

  const styles = clsx([
    defaultStyles,
    sizeClasses[size],
    variant === 'solid' && solidStyles,
    variant === 'outline' && outlineStyles,
    variant === 'link' && linkStyles,
    disabled && 'opacity-50 cursor-not-allowed',
  ]);

  return (
    <button disabled={disabled} className={styles} {...buttonProps}>
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {isLoading ? loadingText : children}
      {isLoading && <ImSpinner2 className="ml-3 animate-spin" />}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};
