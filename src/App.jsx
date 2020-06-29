import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled, { createGlobalStyle } from 'styled-components';
import TodoInput from './containers/TodoInput';
import TodoList from './containers/TodoList';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  body {
    font-family: 'Roboto', sans-serif;
  }
`

const Main = styled.main`
  align-items: center;
  background: #ecf0f1;
  display: flex;
  flex-direction: column; 
  width: 100%;
  min-height: 100vh;
`;

const App = () => {

  const localData = localStorage.getItem('todos') 
  const initialState = localData ? JSON.parse(localData) : []

  const [todos, setTodos] = useState(initialState)
  const [todo, setTodo] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = ( todo ) => {
    const newTodo = todos.concat({todo, id: uuidv4(), isComplete: false})
    setTodos(newTodo)
    setTodo(todo)
  } 

  const completeTodo = (id) => {
    const newTodos = [...todos]
    const updateItem = todos.find( item => item.id === id )
    updateItem.isComplete = true  
    setTodos(newTodos)
  }
  const deleteTodo = ( id ) => {
    const newList = todos.filter( todo => todo.id !== id )
    setTodos(newList)
  }
  const clearTodo = () => {
    setTodos([])
  }

  return (
    <Main>
      <GlobalStyle/>
      <TodoInput handleAdd={addTodo} textValue={todo}  />
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} event={clearTodo} />
    </Main>
  );
}

export default App
