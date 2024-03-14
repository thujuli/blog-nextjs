import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  const { children } = props;

  return <div className="max-w-[1440px] mx-auto px-[50px]">{children}</div>;
};

export default Container;
