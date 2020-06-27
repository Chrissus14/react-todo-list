import React, { useState } from 'react'
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

  const [todos, setTodos] = useState([])

  const addTodo = ( todo ) => {
    const newTodo = todos.concat({todo, id: uuidv4()})
    setTodos(newTodo)
  } 

  return (
    <Main>
      <GlobalStyle/>
      <TodoInput handleAdd={addTodo} />
      <TodoList todos={todos}/>
    </Main>
  );
}

export default App
