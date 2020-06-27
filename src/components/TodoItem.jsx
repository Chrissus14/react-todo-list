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
`

const TodoItem = ({ todo }) => {
  return (
    <Todo>
      <span>{ todo }</span>
      <span>
        <Icon icon={faPencilAlt} color="#27ae60" />
        <Icon icon={faTrash} color="#e74c3c" />
      </span>
    </Todo>
  )
}

export default TodoItem
