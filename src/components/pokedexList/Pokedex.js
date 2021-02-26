import PokedexItem from "./PokedexItem.js";
import {useDarkMode} from "../../provider/AuthProvider.js";
import {useState,useEffect} from 'react';
import axios from 'axios';

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const promise = axios('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0');
    promise.then(res => {
      setPokemons(res.data.results);
    });
  }, []);

  return(
    <div>
      <input/>
      {pokemons.map((value) => {
        return(
          <div key={value.url}>
            <PokedexItem url={value.url}/>
          </div>
        )
      })}
    </div>
  )
}

export default Pokedex