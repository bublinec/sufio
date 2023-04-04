export type SectionHeaderTags = 'h1' | 'h2';

export interface SectionHeaderProps {
  title?: string;
  as?: SectionHeaderTags;
}

export const SectionHeader = (props: SectionHeaderProps) => {
  const { title, as = 'h2' } = props;
  const HeaderTag = as;

  return <HeaderTag className="text-3xl font-medium">{title}</HeaderTag>;
};
