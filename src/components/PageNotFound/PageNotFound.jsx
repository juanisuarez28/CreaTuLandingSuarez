// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: #333;
`;

const Title = styled.h1`
  font-size: 10rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #666;
`;

const HomeButton = styled.a`
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const PageNotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Página no encontrada</Subtitle>
      <Message>Lo sentimos, la página que buscas no existe.</Message>
      <HomeButton><Link to='/'>Volver al inicio</Link></HomeButton>
    </Container>
  );
};

export default PageNotFound;