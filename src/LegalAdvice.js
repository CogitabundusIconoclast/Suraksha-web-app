import React from 'react';
import styled from 'styled-components';

const LegalAdviceContainer = styled.div`
  padding: 20px;
  background-color: #F5F5F5;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333333;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #336699;
  }
`;

const ExpertList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExpertItem = styled.li`
  padding: 15px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

function LegalAdvice() {
  return (
    <LegalAdviceContainer>
      <Title>Legal Advice</Title>
      <SearchBar type="text" placeholder="Search for experts..." />
      <ExpertList>
        <ExpertItem>Expert 1</ExpertItem>
        <ExpertItem>Expert 2</ExpertItem>
        <ExpertItem>Expert 3</ExpertItem>
      </ExpertList>
    </LegalAdviceContainer>
  );
}

export default LegalAdvice; 