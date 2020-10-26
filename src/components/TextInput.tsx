import React from 'react';

interface TextInputProps {
  value: string | number
  onChange: (e: any) => void
  label: string
}

const TextInput = ({ value, onChange, label }: TextInputProps) => {
  return (
    <>
      <label>{label}</label>
      <input className="text-input" type="number" value={value} onChange={onChange} />
    </>
  );
}

export default TextInput;
