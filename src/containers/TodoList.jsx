import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import TodoItem from '../components/TodoItem'
import Button from '../components/Button';

const ListContainer = styled.section`
  width: 60%;
  @media (max-width: 500px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const TodoList = () => {
  return (
    <ListContainer>
      <Title title="Todo List" />
      <TodoItem/>
      <TodoItem />
      <TodoItem />
      <Button name="Borrar Todos" bg='#c0392b'/>
    </ListContainer>
  )
}

export default TodoList
