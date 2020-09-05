import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = () => (
  <>
    <button type="submit">Teste</button>
  </>
);

export default Button;
