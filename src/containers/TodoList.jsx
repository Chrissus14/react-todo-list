import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import TodoItem from '../components/TodoItem'
import Button from '../components/Button';

const ListContainer = styled.section`
  width: 60%;
  @media (max-width: 500px) {
    padding: 0 1rem;
    width: 100%;
  }
`;
const NoTodos = styled.div`
  color: #333;
  font-weight: 700;
  margin: 1.5rem 0;
  text-align: center;
`

const TodoList = ({ todos, deleteTodo, completeTodo, event}) => {
  const todosList = todos.map(todo => (
    <TodoItem 
      deleteTodo={deleteTodo} 
      completeTodo={completeTodo} 
      key={todo.id} id={todo.id} 
      todo={todo}
      decoration={todo.isComplete ? "line-through" : ""}
    />
  ) )
  
  return (
    <ListContainer>
      <Title title="Todo List" />
      { todos.length === 0 ? <NoTodos>No hay tareas para mostrar</NoTodos> : todosList }
      { todos.length > 0 && <Button clickEvent={event} name="Borrar Todos" bg='#c0392b' /> }
    </ListContainer>
  )
}

export default TodoList
