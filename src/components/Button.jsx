import React from 'react'
import styled from 'styled-components';

const Btn = styled.button`
  background-color: ${props => props.bg};
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
`;

const Button = ({ name, bg, clickEvent }) => {
  return (
    <div>
      <Btn type="submit" bg={bg} onClick={clickEvent} >{name}</Btn>
    </div>
  );
}

export default Button
