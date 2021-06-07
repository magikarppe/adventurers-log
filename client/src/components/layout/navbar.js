import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './logo.png';

export default function MainNavigation() {
  return (
    <Navbar>
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="150"
              height="150"
              className="d-inline-block align-middle"
              alt="Adventurer's Log Logo"
            />
            <h1 className="d-inline-block align-middle">Adventurer's Log</h1>
          </Navbar.Brand>
        </Link>
        <Nav className="me-auto">
         <Nav.Item>
            <Link to="/">All Characters</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/newCharacter">New Characters</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/myCharacters">My Characters</Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
