import React from 'react'
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
  return (
    <Main>
      <GlobalStyle/>
      <TodoInput/>
      <TodoList/>
    </Main>
  );
}

export default App
