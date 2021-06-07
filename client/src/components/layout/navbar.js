import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';

import { Link } from "react-router-dom";


export default function MainNavigation() {
    return (
      <Navbar>
        <Container>
        <Navbar.Brand>Adventures Log</Navbar.Brand>
          <Nav className="me-auto" defaultActiveKey="/">
            <Nav.Item>
              <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="/newCharacter">Create</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="/myCharacters">My Characters</Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    );
  }
  
