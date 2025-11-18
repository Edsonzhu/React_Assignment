import React from "react";
import { textareaFieldDefaultCss, textareaFieldDefaultPlaceholder } from "@/config/components/textareaField";
import { generateId } from '@/utils';

interface TextAreaFieldProps {
  label: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  labelClassName?: string;
  textAreaClassName?: string;
  placeholder?: string;
  errorTextClass?: string;
  errorInputClass?: string;
  value?: string;
  readonly?: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ 
  label, onChange, errorMessage,
  labelClassName, textAreaClassName, placeholder,
  errorTextClass, readonly, value, errorInputClass
 }) => {
  const id = generateId();
  
  return (<div>
    <label className={labelClassName || textareaFieldDefaultCss.label} htmlFor={id} >{label}</label>
    <textarea
      id={id}
      disabled={readonly}
      placeholder={placeholder || textareaFieldDefaultPlaceholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className={!!errorMessage ? (errorInputClass || textareaFieldDefaultCss.errorInput) : (textAreaClassName || textareaFieldDefaultCss.textArea)}>
    </textarea>
    {!!errorMessage
    ? (
      <p className={errorTextClass || textareaFieldDefaultCss.errorText} >
        {errorMessage}
      </p>
    ) : null}
  </div>);
}

export default TextAreaField;