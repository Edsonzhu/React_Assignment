import React, { type ChangeEvent } from "react";
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
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = (props) => {

  return (
    <div>
      <label className={props.labelClass || inputFieldDefaultCss.label}>{props.label}</label>
      <input id={props.id} type={props.inputType || inputFieldDefaultType} placeholder={props.placeholder || ""} 
        className={!!props.errorMessage ? (props.errorInputClass || inputFieldDefaultCss.errorInput) : (props.inputClass || inputFieldDefaultCss.input)}
        onChange={props.onChange}
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