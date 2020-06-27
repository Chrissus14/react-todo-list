import React from 'react'
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from 'styled-components';

const TodoInputSection = styled.section`
  width: 60%;
  @media (max-width: 500px) {
    width: 100%;
    padding: 0 1rem;
  }
`;
const FormContainer = styled.div`
  border: 2px solid gray;
  padding: 13px;
  width: 100%;
`;

const TodoInput = () => {
  return (
      <TodoInputSection>
        <Title title="Todo Input" />
        <FormContainer>
          <form>
            <Input />
          <Button name="Agregar Todo" bg='#2980b9' />
          </form>
        </FormContainer>
      </TodoInputSection>
  );
}

export default TodoInput
