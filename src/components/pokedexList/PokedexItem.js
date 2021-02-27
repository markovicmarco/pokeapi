import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./PokedexItem.css";

const PokedexItem = ({ url }) => {

  const [pokemon, setPokemon] = useState({type: []});
  const [color, setColor] = useState("");

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
      handleColor(res.data.types[0].type.name);
      console.log(res.data);
    });
  }, [url]);

  const handleColor = (type) => {
    switch(type){
      case "normal":
        setColor("#735159"); 
        break;
      case "fighting":
        setColor("#973f26");
        break;
      case "flying":
        setColor("#48677b");
        break;
      case "poison":
        setColor("#5b2d86");
        break;
      case "gound":
        setColor("#a37324");
        break;
      case "rock":
        setColor("#46180b");
        break;
      case "bug":
        setColor("#8bc34a");
        break;
      case "ghost":
        setColor("#31336a");
        break;
      case "steel":
        setColor("#5d736c");
        break;
      case "fire":
        setColor("#fb6c6c");
        break;
      case "water":
        setColor("#70b7fa");
        break;
      case "grass":
        setColor("#48d0b0");
        break;
      case "electric":
        setColor("#e2e02d");
        break;
      case "phychic":
        setColor("#a12b6a");
        break;
      case "ice":
        setColor("#86d2f4");
        break;
      case "dragon":
        setColor("#448a94");
        break;
      case "dark":
        setColor("#030706");
        break;
      case "fairy":
        setColor("#981844");
        break;
      case "shadow":
        setColor("#000000");
        break;
      default:
        setColor("#ffeb3b")
        break;
    }
  }

  return(
    <div className="col-lg-3 col-sm-2">
      <Link 
      to={`/pokedex/pokemon/${pokemon.id}`}
      style={{background: color}} 
      className="card">
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
    </div>
  )
}

export default PokedexItem;