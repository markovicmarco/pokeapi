import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./PokedexItem.css";
import {useProtectedRoute} from "../../provider/AuthProvider.js";
import ValidateColor from "../ValidateColor.js";

const PokedexItem = ({ url }) => {

  const [pokemon, setPokemon] = useState({type: []});
  const [type, setType] = useState('');
  useEffect(() => {
    const promise = axios(url);
    promise.then(res => {
      setPokemon({
        name: res.data.name,
        id: res.data.id,
        image: `https://pokeres.bastionbot.org/images/pokemon/${res.data.id}.png`,
        type: res.data.types,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        speed: res.data.stats[5].base_stat
      })
      setType(res.data.types[0].type.name)
    });
  }, [url]);


  const {setAllowed} = useProtectedRoute();

  return(
      <Link 
      to={`/pokedex/pokemon/${pokemon.id}`}
      style={{background: ValidateColor(type)}}
      className="card"
      onClick={() => setAllowed(true)}>
        <div className="text">
          <h3>
            {pokemon.name}
          </h3>
          <p className="cloud"> 
            <b>Types:</b> {" "}
            {pokemon.type.map((value) => {
              return(
                <span key={value.slot}>{value.type.name}, </span>
              )
            })}
          </p>
          <div><div className="cloud"><b>hp:</b> {pokemon.hp}</div></div>
          <div><div className="cloud"><b>attack:</b> {pokemon.attack}</div></div>
          <div><div className="cloud"><b>defense:</b> {pokemon.defense}</div></div>
          <div><div className="cloud"><b>speed:</b> {pokemon.speed}</div></div>
        </div>
        <div className="img">
          <img src={pokemon.image} alt="" width="100%"/>
          
          <div className="pokeball"></div>
        </div>
      </Link>
  )
}

export default PokedexItem;