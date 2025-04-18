import React from 'react';
import styled from 'styled-components';

const EntryPointContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/path/to/background.jpg') no-repeat center center/cover;
  color: white;
  text-align: center;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  margin: 20px 0;
  animation: slideIn 1s ease-out;

  @keyframes slideIn {
    from { transform: translateY(-50px); }
    to { transform: translateY(0); }
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
`;

const Button = styled.button`
  background-color: #FF6600;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e65c00;
    transform: scale(1.05);
  }
`;

function EntryPoint() {
  return (
    <EntryPointContainer>
      <Title>SURAKSHA</Title>
      <Subtitle>Your safety is our priority</Subtitle>
      <Button>Login</Button>
      <Button>Register</Button>
    </EntryPointContainer>
  );
}

export default EntryPoint; 