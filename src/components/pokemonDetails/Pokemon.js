import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Grid, Header, Segment, Image, Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Pokemoncss from './Pokemon.css'

// https://unpkg.com/grade-js/docs/dist/grade.js



const Pokemon = () => {

  const {id} = useParams();

  const [pokemon, setPokemon] = useState({type: []});

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

    console.log(pokemon);

  return(
    <Container>
      
      <Grid>
        <Grid.Column floated='left' width={8} only='computer'>
        <Image src='https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png' size='medium'/>
        </Grid.Column>
        
        <Grid.Column floated='right' width={8} only='computer'>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Grid.Column>
      
      </Grid>
      
      <Grid>

        <Grid.Column floated='left' width={8} only='mobile'>
        <Image src='https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png' size='medium'/>
        </Grid.Column>


        <Grid.Column floated='right' width={8} only='mobile'>
          Mobile
        </Grid.Column>

        <Grid.Column width={16} only='mobile'><Segment basic padded /><Segment basic padded /></Grid.Column>
      </Grid>

      <Grid doubling columns={1} centered divided>
        <Grid.Column width={16}>
          <Segment stacked>
            <Image src={ pokemon.image } size='medium' centered className='imagefix' />
            <Header as='h1' textAlign='center' className='cap'>{ pokemon.name }
            <Header.Subheader>
              <Label>#{ pokemon.id }</Label>
              { pokemon.type.map(r => <Label key={r.slot} className='cap'>{r.type.name}</Label>)}
              </Header.Subheader>
            </Header>
          </Segment>
        </Grid.Column>
      </Grid>
      
      
    </Container>
  )
}

export default Pokemon;