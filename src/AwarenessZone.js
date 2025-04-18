import React from 'react';
import styled from 'styled-components';

const AwarenessZoneContainer = styled.div`
  padding: 20px;
  background-color: #F5F5F5;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333333;
`;

const ArticleList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ArticleItem = styled.li`
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

function AwarenessZone() {
  return (
    <AwarenessZoneContainer>
      <Title>Awareness Zone</Title>
      <ArticleList>
        <ArticleItem>Article 1: Safety tips and advice...</ArticleItem>
        <ArticleItem>Article 2: Legal rights and information...</ArticleItem>
        <ArticleItem>Article 3: Community resources...</ArticleItem>
      </ArticleList>
    </AwarenessZoneContainer>
  );
}

export default AwarenessZone; 