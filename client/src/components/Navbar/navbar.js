import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


export default function App() {
    return (
        <>
      <Navbar>
        <Container>
        <Navbar.Brand href="#home">Adventures Log</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#profile.js">Profile</Nav.Link>
          <Nav.Link href="#createacharacter.js">Create a Character</Nav.Link>
          <Nav.Link href="#mycharacter.js">My Character</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
       </>


      /* Not Bootstrap */
        /* <Router>
        { <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
  
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
}; */

    );
  }
  
