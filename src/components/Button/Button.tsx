import React from 'react';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="bg-green-300">{props.label}</button>;
};

export default Button;
