import { ProvideProtected, ProvideDark, ProvideColor } from "./provider/AuthProvider.js";
import "./styles.css";
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Pokedex from './components/pokedexList/Pokedex.js'
import Pokemon from "./components/pokemonDetails/Pokemon";
import Encounters from "./components/Location/Encounters.js";
import ProtectedRoute from './components/ProtectedRoute.js';
import "./components/pokedexList/Pokedex.css";
import Settings from "./components/settings/Settings.js";

export default function App() {
  return (
    <ProvideDark>
      <ProvideProtected>
        <div className="App">
          <Router>
            <div className="pokeball-background"></div>
            <Switch>
              <Route path="/pokedex/pokemon/:id/encounters" component={Encounters}/>
              {/* <ProtectedRoute path="/pokedex/pokemon/:id">
                <Pokemon/>
              </ProtectedRoute> */}
              <Route path="/pokedex/pokemon/:id" component={Pokemon}/>
              <Route path="/pokedex" component={Pokedex}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/">Hola</Route>
            </Switch>
          </Router>
        </div>
      </ProvideProtected>
    </ProvideDark>
  );
}