import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, Segment, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Pokemon = () => {

  const {id} = useParams();
  

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const promise = axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
    promise.then(res => {
      setPokemon({
        id: res.data.id,
        name: res.data.name,
        image: `https://pokeres.bastionbot.org/images/pokemon/${res.data.id}.png`,
        type: res.data.types,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        speed: res.data.stats[5].base_stat
      })
    });
    }, [])

    console.log(pokemon)

  return(
    <Container>
      <Segment basic />
      <Segment>
      <Image src={ pokemon.image } size='medium' centered />
      <Header as='h3' textAlign='center'>{ pokemon.name }
      <Header.Subheader>
      #{ pokemon.id }
    </Header.Subheader>
      </Header>
      </Segment>
    </Container>
  )
}

export default Pokemon;