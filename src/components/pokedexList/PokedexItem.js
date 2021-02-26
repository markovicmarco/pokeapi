import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PokedexItem = ({ url }) => {

  const [pokemon, setPokemon] = useState({type: []})

  useEffect(() => {
    const promise = axios(url);
    promise.then(res => {
      setPokemon({
        name: res.data.name,
        image: `https://pokeres.bastionbot.org/images/pokemon/${res.data.id}.png`,
        type: res.data.types,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        speed: res.data.stats[5].base_stat
      })
      console.log(res.data)
    });
  }, [])

  return(
    <>
      <div><b>Nombre:</b> {pokemon.name}</div>
      <img src={pokemon.image} alt="" width="90px"/>
      <p> <b>Types:</b> {" "}
        {pokemon.type.map((value) => {
          return(
            <span key={value.slot}>{value.type.name}, </span>
          )
        })}
      </p>
      <ul>
        <li><b>hp:</b> {pokemon.hp}</li>
        <li><b>attack:</b> {pokemon.attack}</li>
        <li><b>defense:</b> {pokemon.defense}</li>
        <li><b>speed:</b> {pokemon.speed}</li>
      </ul>
    </>
  )
}

export default PokedexItem;