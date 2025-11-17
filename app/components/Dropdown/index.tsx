import React, { useState, useEffect } from "react";

// config
import { DropdownDefaultCss } from "@/config/components/dropdown"

// assets
import ArrowDownIcon from "@/assets/ArrowDownIcon";

interface DropdownProps {
  options: { value: string | number }[];
  label?: string;
  onClick: (value: string | number) => void;
  component?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onClick, component }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [Component, setComponent] = useState<React.ComponentType<any> | null>()

  useEffect(() => {
    if (component)
    {
    import(`../${component}/index.tsx`)
      .then(module => setComponent(() => module.default))
      // If there is a failure on dynamically importing the component, just log the error
      .catch((e) => console.log(`Error loading custom component: ${component} - ${e.message}`));
    }
  }, [])

  const handleOptionClick = (value: string | number) => {
    setIsOpen(false)
    onClick(value);
  }

  return (
    <div className={DropdownDefaultCss.wraper}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className={DropdownDefaultCss.button}
      >
        {label && <span>{label}</span>}
        <ArrowDownIcon />
      </button>
      {
        isOpen &&
        <div className={DropdownDefaultCss.menu}>
          {
            options.map(({ value }, index) => (
              Component
              ? <div key={index} 
                className={DropdownDefaultCss.option}
                onClick={() =>  handleOptionClick(value)}>
                <Component value={value} />
              </div>
              : <a
                key={index}
                href="#"
                onClick={() => handleOptionClick(value)}
                className={DropdownDefaultCss.option}
              >{value}</a>
            ))
          }
        </div>
      }
  </div>
  )
}

export default Dropdown
