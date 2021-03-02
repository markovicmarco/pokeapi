import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ValidateColor from '../ValidateColor';
import axios from 'axios';
import {ProgressBar} from './ProgressBar'


// import {useDarkMode} from "../../provider/AuthProvider.js";


import { Container, Grid, Segment, Image, Label, Divider, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import './Pokemon.css';

const Pokemon = () => {

  const {id} = useParams();
  const [type, setType] = useState('');
  const [pokemon, setPokemon] = useState({type: []});

  const upperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // const {isDark, darkOn} = useDarkMode();
  // const backgroundColor = isDark ? 'black' : 'red';

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
      setType(res.data.types[0].type.name);
    });
    }, [])

    document.body.style = `background: ${ValidateColor(type)};`;


  return(
    <Container>
      
      <Grid>
        <Grid.Column floated='left' width={8} only='computer'>
        <Image src='https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png' size='medium'/>
        </Grid.Column>
        
        <Grid.Column floated='right' width={8} only='computer'>
        { pokemon.type.map(r => <Image key={r.slot} spaced='right' src={`https://raw.githubusercontent.com/mauroWernly/Pokedex/master/images/types/${upperCase(r.type.name)}.png`} />)}
        { pokemon.type.map(r => <Label className='cap' key={r.slot} style={{backgroundColor:ValidateColor(r.type.name), color: 'white'}}>{r.type.name}</Label>)}
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
            
            <Divider horizontal>
              <Header as='h1' className='cap'>
              { pokemon.name }
              </Header>

              <Header.Subheader>
              <Label>#{ pokemon.id }</Label>
              </Header.Subheader>
            </Divider>




            <Divider horizontal>
              <Header as='h3' textAlign='left' className='cap'>
              Estadisticas
              </Header>
              </Divider>
            <Grid doubling columns={4}>
              <Grid.Column><ProgressBar value={ pokemon.hp } label='HP'/></Grid.Column>
              <Grid.Column><ProgressBar value={ pokemon.speed } label='Speed'/></Grid.Column>
              <Grid.Column><ProgressBar value={ pokemon.attack } label='Attack'/></Grid.Column>
              <Grid.Column><ProgressBar value={ pokemon.defense } label='Defense'/></Grid.Column>
            </Grid>



          </Segment>
        </Grid.Column>
      </Grid>
      
      
    </Container>
  )
}

export default Pokemon;