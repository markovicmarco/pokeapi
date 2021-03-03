import { ProvideProtected, ProvideDark, ProvideColor } from "./provider/AuthProvider.js";
import "./styles.css";
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
} from 'react-router-dom';
import Pokedex from './components/pokedexList/Pokedex.js'
import Pokemon from "./components/pokemonDetails/Pokemon";
import Encounters from "./components/Location/Encounters.js";
import ProtectedRoute from './components/ProtectedRoute.js';
import Settings from "./components/settings/Settings.js";

export default function App() {
  return (
    <ProvideDark>
      <ProvideProtected>
        <div className="App">
          <Router>
            <div className="pokeball-background"></div>
            <Link to="/settings" className="settings">
              <i className="fas fa-cog"></i>
            </Link>
            <Switch>
              <Route path="/pokedex/pokemon/:id/encounters" component={Encounters}/>
              {/* <ProtectedRoute path="/pokedex/pokemon/:id">
                <Pokemon/>
              </ProtectedRoute> */}
              <Route path="/pokedex/pokemon/:id" component={Pokemon}/>
              <Route path="/pokedex" component={Pokedex}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/" render={() => <Redirect to="/pokedex"/>}/>
            </Switch>
          </Router>
        </div>
      </ProvideProtected>
    </ProvideDark>
  );
}