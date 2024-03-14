import React from "react";

interface ButtonCTAProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonCTA: React.FC<ButtonCTAProps> = (props) => {
  const { children, className } = props;
  return (
    <button
      className={`w-fit bg-white py-4 px-[40px] rounded-sm font-bold ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
