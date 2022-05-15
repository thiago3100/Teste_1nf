import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from '../../styles/global'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {FaEye, FaEyeSlash} from 'react-icons/fa'


const Signup = () => {
 
  const [show, setShow]         = useState("");
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleClickEye = (e) => {
    e.preventDefault()
    setShow(!show)
 }

  const handleSignup = () => {
    if (!email | !name | !password) {
      setError("Preencha todos os campos");
      return;
    }  
      
    const res = signup(email, password, name);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
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
          type="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
        </C.AreaInput>
        <C.AreaInput>
        <Input
          type={show ? 'text' : 'password'}
          placeholder="Digite sua Senha"
          value={password}
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
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
