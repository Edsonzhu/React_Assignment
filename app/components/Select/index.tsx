import React from 'react';
import { selectDefaultCss } from '@/config/components/select';
import { type SelectOptionsProps } from '@/interfaces/selectOptionProps';


interface SelectProps {
  label: string;
  options: SelectOptionsProps[];
  onChange: (value: string) => void;
  labelClassName?: string;
  selectClassName?: string;
  defaultValue?: string | undefined;
}

const Select: React.FC<SelectProps> = ({ options, onChange, labelClassName, selectClassName, defaultValue = "", label }) => {
  return (
    <>
      <label className={labelClassName || selectDefaultCss.label}>{label}</label>
      <select className={selectClassName || selectDefaultCss.select} defaultValue={defaultValue} onChange={(e) => onChange(e.target.value)}>
        {/* Adding a blank option to the first element */}
        <option></option> 
        {options.map(({ name, value }, index) => (
          <option key={index} value={value} >{name}</option>
        ))}
      </select>
    </>
  );
}

export default Select;