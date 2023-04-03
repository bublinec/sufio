import clsx from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

export const Button = (props: ButtonProps) => {
  const { className, children } = props;
  return (
    <button
      className={clsx(className, 'bg-primary p-3 px-8 text-white rounded-xl')}
    >
      {children}
    </button>
  );
};
