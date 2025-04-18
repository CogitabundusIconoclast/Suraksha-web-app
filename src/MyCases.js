import React from 'react';
import styled from 'styled-components';

const MyCasesContainer = styled.div`
  padding: 20px;
  background-color: #F5F5F5;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333333;
`;

const CaseList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CaseItem = styled.li`
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

function MyCases() {
  return (
    <MyCasesContainer>
      <Title>My Cases</Title>
      <CaseList>
        <CaseItem>Case 1: Description and details...</CaseItem>
        <CaseItem>Case 2: Description and details...</CaseItem>
        <CaseItem>Case 3: Description and details...</CaseItem>
      </CaseList>
    </MyCasesContainer>
  );
}

export default MyCases; 