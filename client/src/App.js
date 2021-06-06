import { Route, Switch } from 'react-router-dom';

import AllCharactersPage from './pages/allCharacters';
import NewCharacterPage from './pages/newCharacter';
import MyCharactersPage from './pages/myCharacters';
import LoginPage from './pages/login';

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
    <div>
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
