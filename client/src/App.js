import { Route, Switch } from 'react-router-dom';

import AllCharactersPage from './pages/allCharacters';
import NewCharacterPage from './pages/newCharacter';
import MyCharactersPage from './pages/myCharacters';
import LoginPage from './pages/login';

import "./App.css";

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