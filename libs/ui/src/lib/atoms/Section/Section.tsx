import clsx from 'clsx';
import { ReactNode } from 'react';
import { Container } from '../Container/Container';
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
        `flex flex-col gap-12 md:gap-16 w-full`,
        align === 'center' ? 'items-center' : 'items-start'
      )}
    >
      {header ? <SectionHeader {...header} /> : null}
      <Container>{props.children}</Container>
    </section>
  );
};
