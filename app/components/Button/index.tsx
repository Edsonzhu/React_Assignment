import React from "react";

import { buttonDefaultCss } from "@/config/components/buttonCss";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={className || buttonDefaultCss}>
      {label}
    </button>
  );
};

export default Button;