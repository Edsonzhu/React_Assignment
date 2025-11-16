import React from "react";
import { textAreaFieldDefaultCss, textAreaFieldDefaultPlaceholder } from "@/config/components/textAreaField";

interface TextAreaFieldProps {
  label: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  labelClassName?: string;
  textAreaClassName?: string;
  placeholder?: string;
  errorTextClass?: string;
  readonly?: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ 
  label, onChange, errorMessage,
  labelClassName, textAreaClassName, placeholder,
  errorTextClass, readonly
 }) => {
  return (<div>
    <label className={labelClassName || textAreaFieldDefaultCss.label}>{label}</label>
    <textarea
      disabled={readonly}
      placeholder={placeholder || textAreaFieldDefaultPlaceholder}
      onChange={(e) => onChange(e.target.value)}
      className={!!errorMessage ? (errorTextClass || textAreaFieldDefaultCss.errorInput) : (textAreaClassName || textAreaFieldDefaultCss.textArea)}>
    </textarea>
    {!!errorMessage
    ? (
      <p className={errorTextClass || textAreaFieldDefaultCss.errorText} >
        {errorMessage}
      </p>
    ) : null}
  </div>);
}

export default TextAreaField;