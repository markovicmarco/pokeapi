import PokedexItem from "./PokedexItem.js";
import {useDarkMode} from "../../provider/AuthProvider.js";
import {useState,useEffect} from 'react';
import axios from 'axios';
import './Pokedex.css';

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const promise = axios('https://pokeapi.co/api/v2/pokemon/?limit=16&offset=0');
    promise.then(res => {
      setPokemons(res.data.results);
    });
  }, []);

  return(
    <div className="container">
      <input/>
      <div className="row">
        {pokemons.map((value) => {
          return(
            <>
              <PokedexItem url={value.url}/>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Pokedex