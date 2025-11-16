import React from "react";
import { textareaFieldDefaultCss, textareaFieldDefaultPlaceholder } from "@/config/components/textareaField";

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
    <label className={labelClassName || textareaFieldDefaultCss.label}>{label}</label>
    <textarea
      disabled={readonly}
      placeholder={placeholder || textareaFieldDefaultPlaceholder}
      onChange={(e) => onChange(e.target.value)}
      className={!!errorMessage ? (errorTextClass || textareaFieldDefaultCss.errorInput) : (textAreaClassName || textareaFieldDefaultCss.textArea)}>
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