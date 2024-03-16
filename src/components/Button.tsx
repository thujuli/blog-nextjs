import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
  bgColor: string;
  textColor: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { bgColor, children, onClick, textColor, type } = props;
  return (
    <button
      type={type}
      className={`w-fit mt-2 px-3 py-2 rounded ${bgColor} ${textColor} text-font-europa-regular font-bold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
