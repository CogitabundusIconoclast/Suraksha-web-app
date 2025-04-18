import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  padding: 20px;
  background-color: #F5F5F5;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333333;
`;

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SettingsInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #336699;
  }
`;

const SaveButton = styled.button`
  background-color: #336699;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2a557f;
  }
`;

function Settings() {
  return (
    <SettingsContainer>
      <Title>Settings</Title>
      <SettingsForm>
        <SettingsInput type="text" placeholder="Username" required />
        <SettingsInput type="email" placeholder="Email" required />
        <SaveButton type="submit">Save Changes</SaveButton>
      </SettingsForm>
    </SettingsContainer>
  );
}

export default Settings; 