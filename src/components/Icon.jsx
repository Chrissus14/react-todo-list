import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const IconStyle = styled.span`
  padding: 10px;
  background: ${(props) => props.bg || "transparent"};
  color: ${(props) => props.color || "white"};
  min-width: 50px;
  text-align: center;
`;

const Icon = ({ icon, bg, color }) => {
  return (
    <IconStyle bg={bg} color={color} >
      <FontAwesomeIcon icon={icon} />
    </IconStyle>
  );
}

export default Icon
