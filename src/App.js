import { ProvideProtected, ProvideDark } from "./provider/AuthProvider.js";
import "./styles.css";
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Pokedex from './components/pokedexList/Pokedex.js'
import Pokemon from "./components/pokemonDetails/Pokemon";
import Encounters from "./components/Location/Encounters.js";

export default function App() {
  return (
    <ProvideDark>
      <ProvideProtected>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/pokedex/pokemon/:id/encounters" component={Encounters}/>
              <Route path="/pokedex/pokemon/:id" component={Pokemon}/>
              <Route path="/pokedex" component={Pokedex}/>
              <Route path="/">Hola</Route>
            </Switch>
          </Router>
        </div>
      </ProvideProtected>
    </ProvideDark>
  );
}
