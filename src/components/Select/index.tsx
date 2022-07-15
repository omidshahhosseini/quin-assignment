import { ChangeEventHandler, useRef } from 'react';

type Props = {
  title: string;
  options: Array<string | number>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  show?: boolean;
};

export const Select = ({ title, options, onChange, show = true }: Props) => {
  const selectId = useRef(Math.random() * 1000 + title).current;

  if (!show) return <></>;

  return (
    <div>
      <label htmlFor={selectId}>{title}</label>
      <select
        name={title}
        onChange={onChange}
        id={selectId}
        data-testid="select">
        <option value=""></option>
        {options.map((option, index) => (
          <option key={`${option}-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
