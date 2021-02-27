import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Header, Segment, Image, Statistic } from 'semantic-ui-react';
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

    const logoFix = {
      marginTop: -150
    }

  return(
    <Container>
      <Segment basic padded='very' />


      <Segment raised inverted color='grey'>
      <Image src='https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png' size='large' centered style={logoFix} verticalAlign='top' />
      <Image src={ pokemon.image } size='medium' centered />
      <Header as='h1' textAlign='center'>{ pokemon.name }
      <Header.Subheader>
      #{ pokemon.id }
    </Header.Subheader>
      </Header>
      
      <Grid doubling columns={4}>

        <Grid.Column>
          
          <Statistic color='green'>
            <Statistic.Value>{pokemon.hp}</Statistic.Value>
            <Statistic.Label>HP</Statistic.Label>
          </Statistic>

        </Grid.Column>

        <Grid.Column>

        <Statistic color='red'>
            <Statistic.Value>{pokemon.attack}</Statistic.Value>
            <Statistic.Label>Attack</Statistic.Label>
        </Statistic>

        </Grid.Column>

        <Grid.Column>

        <Statistic color='blue'>
            <Statistic.Value>{pokemon.defense}</Statistic.Value>
            <Statistic.Label>Defense</Statistic.Label>
        </Statistic>

        </Grid.Column>

        <Grid.Column>

        <Statistic color='teal'>
            <Statistic.Value>{pokemon.speed}</Statistic.Value>
            <Statistic.Label>Speed</Statistic.Label>
        </Statistic>

        </Grid.Column>

      </Grid>
    
      </Segment>
    </Container>
  )
}

export default Pokemon;