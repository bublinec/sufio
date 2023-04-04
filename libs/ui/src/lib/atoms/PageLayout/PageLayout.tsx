import { ReactNode } from 'react';

export interface PageLayoutProps {
  children: ReactNode | ReactNode[];
}

export const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  return (
    <main
      className={`py-page md:py-page-desktop gap-page md:gap-page-desktop flex flex-col`}
    >
      {children}
    </main>
  );
};
