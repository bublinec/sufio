export interface SectionHeaderProps {
  title?: string;
}

export const SectionHeader = (props: SectionHeaderProps) => {
  const { title } = props;

  return <h1 className="text-3xl font-medium">{title}</h1>;
};
