import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import * as C from '../../styles/global'
import useAuth from "../../hooks/useAuth";
import {FaEye, FaEyeSlash} from 'react-icons/fa'

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [show, setShow]   = useState("");
  const [error, setError] = useState("");

  const handleClickEye = (e) => {
     e.preventDefault()
     setShow(!show)
  }

  
  const handleLogin = () => {
    if (!email | !Password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, Password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
      <C.AreaInput>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
      </C.AreaInput>  
        <C.AreaInput>
          <Input
            type={show ? 'text' : 'password'}
            placeholder="Digite sua Senha"
            value={Password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
          <C.Eyes>
              {show ? (
                <FaEye 
                size={20}
                onClick={handleClickEye} />
              ) : (
                <FaEyeSlash 
                size={20}
                onClick={handleClickEye} />
              )}
          </C.Eyes>
        </C.AreaInput>
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
