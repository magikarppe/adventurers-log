import React, { Component } from "react";
//import OldPaper from "./background.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        
        <h2>Adventurers Log</h2>
  <a href="#profile">Profile</a>
  <a href="#character">Character</a>
  <a href="#story">Story</a>
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