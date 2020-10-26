import React from 'react';

interface DateInputProps {
  value: any
  onChange: (e: any) => void
  label: string
}

const DateInput = ({ value, onChange, label }: DateInputProps) => {
  return (
    <>
      <label>{label}</label>
      <input type="date" value={value} onChange={onChange} className="date-input" min="2020-11-01" max="2030-01-01"/>
    </>
  );
}

export default DateInput;
