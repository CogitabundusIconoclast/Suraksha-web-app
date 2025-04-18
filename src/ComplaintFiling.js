import React from 'react';
import styled from 'styled-components';

const ComplaintFilingContainer = styled.div`
  padding: 20px;
  background-color: #F5F5F5;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333333;
`;

const Form = styled.form`
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

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #336699;
  }
`;

const SubmitButton = styled.button`
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

function ComplaintFiling() {
  return (
    <ComplaintFilingContainer>
      <Title>Complaint Filing</Title>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Input type="text" placeholder="Subject" required />
        <Input type="text" placeholder="Description" required />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </ComplaintFilingContainer>
  );
}

export default ComplaintFiling; 