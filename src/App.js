import { ProvideProtected, ProvideDark, ProvideNumItems } from "./provider/AuthProvider.js";
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
        <ProvideNumItems>
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
              <footer className="footer" >
                <h2 style={{paddingTop:"30px", textShadow: "2px 2px 2px grey"}}>Create by Developers:</h2>
                <ul style={{listStyle:"none", textAlign:"center"}}>
                  <li style={{textShadow: "2px 2px 2px grey"}}>Andres Mendoza  {" "} 
                    <a href="https://www.linkedin.com/in/andr%C3%A9s-felipe-rojas-valero-44b215176/" target="_black"><i class="fab fa-linkedin zoom" aria-hidden="true"></i></a>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&amp;ogbl#inbox" target="_blanck"><i class="fa fa-envelope-o zoom" aria-hidden="true"></i></a>
                  </li>
                  <li style={{textShadow: "2px 2px 2px grey"}}> Andrés F.   Rojas {" "} 
                  <a href="https://www.linkedin.com/in/andr%C3%A9s-felipe-rojas-valero-44b215176/" target="_black"><i class="fab fa-linkedin zoom" aria-hidden="true"></i></a>
                  <a href="https://mail.google.com/mail/u/0/?tab=rm&amp;ogbl#inbox" target="_blanck"><i class="fa fa-envelope-o zoom" aria-hidden="true"></i></a>
                  </li>
                  <li style={{textShadow: "2px 2px 2px rgba(0, 0, 0, 0.404)"}}>Daniel Camacho {" "} 
                  <a href="https://www.linkedin.com/in/andr%C3%A9s-felipe-rojas-valero-44b215176/" target="_black"><i class="fab fa-linkedin zoom" aria-hidden="true"></i></a>
                  <a href="https://mail.google.com/mail/u/0/?tab=rm&amp;ogbl#inbox" target="_blanck"><i class="fa fa-envelope-o zoom" aria-hidden="true"></i></a>
                  </li>
                </ul>
                <p className="space">
                  © 2021 Web Developers | Squad 5  Academlo 
                </p>
              </footer>
            </Router>
          </div>
        </ProvideNumItems>
      </ProvideProtected>
    </ProvideDark>
    
  );
}