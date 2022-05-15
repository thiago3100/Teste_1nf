import React from "react";
import { Buttom } from "../../styles/global";
const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <Buttom type={Type} onClick={onClick}>
      {Text}
    </Buttom>
  );
};

export default Button;
