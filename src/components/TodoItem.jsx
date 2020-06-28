import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = styled.div`
  align-items: center;
  color: #333;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0.9rem;
  text-decoration: ${ props => props.decoration };
`

const TodoItem = ({ todo, id, deleteTodo, completeTodo, decoration}) => {


  const handleDeleteTodo = ( id ) => {
    deleteTodo(id)
  }
  const handleCompleteTodo = (id) => {
    completeTodo(id)
  }


  return (
    <Todo decoration={decoration}>
      <span>{ todo.todo }</span>
      <span>
        <Icon icon={faPencilAlt} color="#27ae60" title="Completar" id={id} handleId={handleCompleteTodo} />
        <Icon icon={faTrash} color="#e74c3c" title="Eliminar" id={id} handleId={handleDeleteTodo} />
      </span>
    </Todo>
  )
}

export default TodoItem
