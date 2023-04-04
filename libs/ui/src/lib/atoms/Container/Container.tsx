import clsx from 'clsx';
import { ReactNode } from 'react';

export interface ContainerProps {
  children?: ReactNode | ReactNode[];
}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return <div className={clsx(`container mx-auto px-6`)}>{children}</div>;
};
