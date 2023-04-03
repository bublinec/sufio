import clsx from 'clsx';

export interface ButtonProps {
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { className } = props;
  return (
    <button className={clsx(className, 'bg-primary p-4 text-white')}>
      Button
    </button>
  );
};
