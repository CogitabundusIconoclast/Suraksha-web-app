import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #336699;
  position: fixed;
  left: -250px;
  top: 0;
  height: 100%;
  transition: left 0.5s ease, background-color 0.3s ease;
  color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2a557f;
  }
`;

const MenuItem = styled.div`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #2a557f;
    transform: translateX(5px);
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Link to="/">
        <MenuItem>Dashboard</MenuItem>
      </Link>
      <Link to="/complaint-filing">
        <MenuItem>Complaint Filing</MenuItem>
      </Link>
      <Link to="/legal-advice">
        <MenuItem>Legal Advice</MenuItem>
      </Link>
      <Link to="/my-cases">
        <MenuItem>My Cases</MenuItem>
      </Link>
      <Link to="/awareness-zone">
        <MenuItem>Awareness Zone</MenuItem>
      </Link>
      <Link to="/settings">
        <MenuItem>Settings</MenuItem>
      </Link>
    </SidebarContainer>
  );
}

export default Sidebar; 