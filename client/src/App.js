import React, { Component } from "react";
//import OldPaper from "./background.svg";
import "./App.css";
import Nav from "./components/Navbar/navbar"
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



function App() {
  
  return (
    <div className="App">
        <div className="Navbar">
          <Nav />
        </div>
      <p className="App-intro"> 
            Welcome Adventurers! Are you ready for you own personalized journey within the ever so wonderful Dungeon and Dragons?
      </p>
      <p>You are? Okay, let's start with your character.</p>
    </div>
  );




}


export default App;

//Logo Code
//<img src={logo} className="App-logo" alt="logo" />

//Background Code
//<img src={OldPaper} className="Background" alt="OldPaper" />

// <div className="App-header"> 
        
//<h2>Adventurers Log</h2>
  
//</div>