import React from 'react'
import styled from "styled-components";

const TitleH2 = styled.h2`
  color: #333 ;
  margin: 1.1rem 0;
  text-align: center;
`;

const Title = ({ title }) => {
return <TitleH2>{ title }</TitleH2>;
}

export default Title
