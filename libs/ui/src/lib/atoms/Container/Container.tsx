import clsx from 'clsx';
import { ReactNode } from 'react';

export interface ContainerProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}

export const Container = (props: ContainerProps) => {
  const { children, className } = props;
  return (
    <div className={clsx(className, `container mx-auto px-6`)}>{children}</div>
  );
};
