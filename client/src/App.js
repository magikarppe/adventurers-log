import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route path='/' exact>
            <AllCharactersPage />
          </Route>
          <Route path='/newCharacter'>
            <NewCharacterPage />
          </Route>
          <Route path='/myCharacters'>
            <MyCharactersPage />
          </Route>
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

// <div className="App-header"> 
        
//<h2>Adventurers Log</h2>
  
//</div>
