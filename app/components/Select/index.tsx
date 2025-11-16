import React from 'react';
import { selectDefaultCss } from '@/config/components/select';
import { type SelectOptionsProps } from '@/interfaces/selectOptionProps';


interface SelectProps {
  label: string;
  options: SelectOptionsProps[];
  onChange: (value: string) => void;
  labelClassName?: string;
  selectClassName?: string;
  defaultValue?: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange, labelClassName, selectClassName, defaultValue, label }) => {
  return (
    <>
      <label className={labelClassName || selectDefaultCss.label}>{label}</label>
      <select className={selectClassName || selectDefaultCss.select} onChange={(e) => onChange(e.target.value)}>
        <option selected={!defaultValue} ></option>
        {options.map((option, index) => (
          <option key={index} value={option.value} selected={defaultValue === option.value} >{option.name}</option>
        ))}
      </select>
    </>
  );
}

export default Select;