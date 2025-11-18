import React from "react";
import { inputFieldDefaultCss, inputFieldDefaultType } from "@/config/components/inputField";

interface InputFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  inputClass?: string;
  errorMessage?: string;
  errorInputClass?: string;
  errorTextClass?: string;
  labelClass?: string;
  inputType?: string;
  readonly?: boolean;
  value?: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <div>
      <label  className={props.labelClass || inputFieldDefaultCss.label} htmlFor={props.id} >{props.label}</label>
      <input disabled={props.readonly} id={props.id} type={props.inputType || inputFieldDefaultType} placeholder={props.placeholder || ""} 
        className={!!props.errorMessage ? (props.errorInputClass || inputFieldDefaultCss.errorInput) : (props.inputClass || inputFieldDefaultCss.input)}
        onChange={(e) => props.onChange(e.target.value)} value={props.value}
        />
      {!!props.errorMessage
      ? (
        <p className={props.errorTextClass || inputFieldDefaultCss.errorText} >
          {props.errorMessage}
        </p>
      ) : null}
  </div>
  );
}

export default InputField;