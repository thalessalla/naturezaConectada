import React, { ChangeEvent } from 'react';

interface InputProps {
  type: string;
  text: string;
  name: string;
  placeholder?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

function Input({ type, text, name, placeholder, handleChange, value }: InputProps) {
  return (
    <div className='input-component'>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default Input;
