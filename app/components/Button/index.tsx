import React from "react";

import { buttonDefaultCss } from "@/config/components/button";

export enum ButtonTypes {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

interface ButtonProps {
  label: string;
  type?: ButtonTypes.BUTTON | ButtonTypes.SUBMIT | ButtonTypes.RESET;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, type = ButtonTypes.BUTTON, onClick, className, disabled }) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={className || buttonDefaultCss}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;