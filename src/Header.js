import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 60px;
  background-color: #003366;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #002244;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>SURAKSHA</Logo>
      <UserProfile>
        {/* Avatar and dropdown will go here */}
      </UserProfile>
    </HeaderContainer>
  );
}

export default Header; 