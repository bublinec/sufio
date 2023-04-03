import { ImSpinner2 } from '@react-icons/all-files/im/ImSpinner2';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

const defaultStyles = `px-8 py-3 text-sm tracking-wider transition-all duration-300 ease-in-out rounded-md 
bg-primary text-white hover:bg-primary/90 active:bg-primary/80 shadow-primary/30
border-2 border-primary flex items-center justify-center space-x-3`;

const disabledStyles = `opacity-50`;

export const Button = (props: ButtonProps) => {
  const {
    disabled,
    children,
    className,
    isLoading,
    loadingText,
    ...buttonProps
  } = props;
  return (
    <button
      disabled={disabled}
      className={clsx([defaultStyles, disabled && disabledStyles, className])}
      {...buttonProps}
    >
      {isLoading ? loadingText : children}
      {isLoading && <ImSpinner2 className="ml-3 animate-spin" />}
    </button>
  );
};
