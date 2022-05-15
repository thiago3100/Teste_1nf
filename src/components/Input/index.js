import React from "react";
import { Input } from "../../styles/global";

const InputV = ({ type, placeholder, value, onChange }) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputV;
