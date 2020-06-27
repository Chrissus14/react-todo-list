import React from 'react'
import styled from "styled-components";
import Icon from './Icon';
import { faThList } from "@fortawesome/free-solid-svg-icons";

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
`;
const InputField = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
`;

const Input = () => {
  return (
    <InputContainer className="input-container">
      <Icon icon={faThList} bg="#3498db" />
      <InputField type="text" placeholder="Agrega una tarea a tu lista" />
    </InputContainer>
  );
}

export default Input
