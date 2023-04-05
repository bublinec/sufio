export interface NumberInputProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  helpText?: string;
}

export const NumberInput = (props: NumberInputProps) => {
  const { onChange, helpText, label, name, ...restOfProps } = props;

  return (
    <>
      {label && (
        <label htmlFor={name} className="hidden">
          {label}
        </label>
      )}
      <input
        {...restOfProps}
        id={name}
        name={name}
        onChange={(e) => onChange(Number(e.target.value))}
        type="number"
        className="border border-gray-300 rounded-md w-16 h-8 text-center text-sm pl-2.5"
        aria-describedby={`${name}-help`}
      />
      {helpText && (
        <span id={`${name}-help`} className="hidden" role="alert">
          {helpText}
        </span>
      )}
    </>
  );
};
