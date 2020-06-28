import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const IconStyle = styled.i`
  padding: 10px;
  background: ${(props) => props.bg || "transparent"};
  color: ${(props) => props.color || "white"};
  cursor: pointer;
  min-width: 50px;
  text-align: center;
`;

const Icon = ({ icon, bg, color, title, id, handleId }) => {

  const handleClick = (id) => {
    handleId(id)
  }

  return (
    <IconStyle bg={bg} color={color} onClick={() => handleClick(id)} title={title} >
      <FontAwesomeIcon icon={icon} />
    </IconStyle>
  );
}

export default Icon
