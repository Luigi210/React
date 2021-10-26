import './App.css'
import Profile from './Components/Profile'
import NavBar from './Components/NavBar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PersonalInfo from "./Pages/PersonalInfo";
import Repository from "./Pages/Repository";

function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <div className="container pt-4">
              <Switch>
                  <Route path="/main" exact component={Profile}/>
                  <Route path="/info/:name" component={PersonalInfo}/>
                  <Route path="/repo" component={Repository}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
