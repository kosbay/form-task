import React from 'react';
import Switch from "react-switch"

interface SwitchInputProps {
  value?: any
  onChange?: any
  label?: string
}

const SwitchInput = ({ value, onChange, label }: SwitchInputProps) => {
  return (
    <div className="switch-container">
      <Switch
        onChange={onChange}
        checked={value}
        height={18}
        width={38}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor="#F4F8FA"
        onColor="#F4F8FA"
        offHandleColor="#BDBDBD"
        onHandleColor="#2F80ED"
      />
      <span className="switch-label">{label}</span>
    </div>
  );
}

export default SwitchInput;
