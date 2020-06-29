import React from 'react'
import styled from "styled-components";
// import Icon from './Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

const IconStyle = styled.i`
  padding: 10px;
  background: #2980b9;
  color: white;
  min-width: 50px;
  text-align: center;
`;

const Input = ({ change, todo}) => {

  return (
    <InputContainer className="input-container">
      {/* <Icon icon={faThList} bg="#3498db" /> */}
      <IconStyle>
        <FontAwesomeIcon icon={faThList} />
      </IconStyle>
      <InputField onChange={change} type="text" placeholder="Agrega una tarea a tu lista" value={todo} />
    </InputContainer>
  );
}

export default Input
