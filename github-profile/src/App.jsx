import './App.css'
import Profile from './Components/Profile'
import NavBar from './Components/NavBar'
import {BrowserRouter, Switch, Route, Link, NavLink, Router} from 'react-router-dom'
import PersonalInfo from "./Pages/PersonalInfo";
import Repository from "./Pages/Repository";

function App() {
  return (
      <>
      <BrowserRouter>
          <NavBar/>
          <div className="container pt-4">
              <Switch>
                  <Route exact path='/'>
                      <div className={"github-profile-block"}>
                          <h1>Welcome to the GitHub Profile Search </h1>
                          <div>
                              <p>If you want to go to main search. Click button below</p>
                              <button>
                                  <Link to={'/main'}>Go Main</Link>
                              </button>
                          </div>
                      </div>
                  </Route>
                  <Route path="/main"  component={Profile}/>
                  <Route path="/info/:name" component={PersonalInfo}/>
                  <Route path="/repo" component={Repository}/>
              </Switch>
          </div>
      </BrowserRouter>
      </>
  );
}

export default App;
