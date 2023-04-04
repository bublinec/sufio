import clsx from 'clsx';
import { ReactNode } from 'react';
import {
  SectionHeader,
  SectionHeaderProps,
} from '../SectionHeader/SectionHeader';

export interface SectionProps {
  children: ReactNode | ReactNode[];
  header?: SectionHeaderProps;
  align?: 'left' | 'center';
}

export const Section = (props: SectionProps) => {
  const { header, align = 'center' } = props;
  return (
    <section
      className={clsx(
        `flex flex-col gap-12 md:gap-16`,
        align === 'center' ? 'items-center' : 'items-start'
      )}
    >
      {header ? <SectionHeader {...header} /> : null}
      {props.children}
    </section>
  );
};
