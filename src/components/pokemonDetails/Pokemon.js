import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Container, Grid, Segment, Image, Label, Divider, Header, Icon, Button } from "semantic-ui-react";

import HeaderApp from "./Header";
import ProgressBar from "./ProgressBar";
import Movements from './Movements'
import Abilities from './Abilities'
import Types from './Types'
import Main from './Main'


import ValidateColor from "../ValidateColor";

import "./Pokemon.css";
export const upperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const Pokemon = () => {
  const { id } = useParams();
  const [type, setType] = useState("");
  const [pokemon, setPokemon] = useState({
    type: [],
    abilities: [],
    moves: [],
  });

  useEffect(() => {
    const promise = axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
    promise.then((res) => {
      setPokemon({
        id: res.data.id,
        name: res.data.name,
        image: `https://pokeres.bastionbot.org/images/pokemon/${res.data.id}.png`,
        type: res.data.types,
        height: res.data.height,
        weight: res.data.weight,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        speed: res.data.stats[5].base_stat,
        abilities: res.data.abilities,
        moves: res.data.moves,
      });
      setType(res.data.types[0].type.name);
    });
  }, []);

  document.body.style = `background: ${ValidateColor(type)};`;

  console.log(pokemon);

  return (
    <Container>

        <HeaderApp />
      <Grid columns={2} centered stackable>
        <Grid.Column width={12}>
            
            <Main id={ pokemon.id } name={ pokemon.name } img={ pokemon.image } height={ pokemon.height } weight={ pokemon.weight } />

          <Grid columns={2} stackable>
            <Grid.Column>
              <Types data={ pokemon.type } />
            </Grid.Column>

            <Grid.Column>
              <Abilities data={ pokemon.abilities } />
            </Grid.Column>
          </Grid>

          <Segment>
            <Divider horizontal>
              <Header as="h1" className="cap textshadow" content="Stats Base" />
            </Divider>
            <ProgressBar value={pokemon.hp} label="HP" />
            <ProgressBar value={pokemon.speed} label="Speed" />
            <ProgressBar value={pokemon.attack} label="Attack" />
            <ProgressBar value={pokemon.defense} label="Defense" />
          </Segment>
        </Grid.Column>

        <Grid.Column width={4}>
        <Link to={`/pokedex/pokemon/${id}/encounters`}>
            <Button icon="map marker alternate" content="Encounters" fluid />
        </Link>

          <Movements data={ pokemon.moves }/>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Pokemon;
