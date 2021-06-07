import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import AllCharactersPage from './pages/allCharacters';
import NewCharacterPage from './pages/newCharacter';
import MyCharactersPage from './pages/myCharacters';
import LoginPage from './pages/login';
import Layout from './components/layout/Layout';


import "./App.css";

function App() {
    return (
      <div>
        <Layout>
          <>
       <Navbar bg="dark" variant="dark" width="1000px" font-family= 'Oldenburg'>
    <Navbar.Brand href="#allCharacter">
      <img
        alt=""
        src="./images/advlogo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Adventurers Log
    </Navbar.Brand>
    <Navbar.Brand href="#allCharacters.js">All Characters</Navbar.Brand>
    <Navbar.Brand href="#newCharacters.js">New Characters</Navbar.Brand>
    <Navbar.Brand href="#myCharacters.js">My Characters</Navbar.Brand>
    <Navbar.Brand href="#longin.js">Login</Navbar.Brand>
  </Navbar>
          </>
            <Switch>
            <AllCharactersPage />
          <Route path='/allCharacter' exact>
          </Route>
          <NewCharacterPage />
          New Character
          <Route path='/newCharacter'>
            <NewCharacterPage />
          </Route>
          <MyCharactersPage />
          <Route path='/myCharacters'>
            <MyCharactersPage />
          </Route>
          <LoginPage />
          <Route path='/login'>
            <LoginPage />
          </Route>
        </Switch>
      </Layout>
  </div>
  );
}


export default App;

//Logo Code
//<img src={logo} className="App-logo" alt="logo" />

//Background Code
//<img src={OldPaper} className="Background" alt="OldPaper" />

//Add Footer
//<Footer />
//import Footer from './components/Footer/index.js';