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
  const [pokemon, setPokemon] = useState({type: [], habilities: [], moves: []});
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
        speed: res.data.stats[5].base_stat,
        habilities: res.data.abilities,
        moves: res.data.moves,
      })
      setType(res.data.types[0].type.name);
    });
    }, [])

    document.body.style = `background: ${ValidateColor(type)};`;

console.log(pokemon)
    
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
        
        <Image.Group size='mini'>
          { pokemon.type.map(r => 
        <Image key={r.slot} src={`https://raw.githubusercontent.com/mauroWernly/Pokedex/master/images/types/${upperCase(r.type.name)}.png`} />)}
          </Image.Group>
          
        { pokemon.type.map(r => <Label className='cap' key={r.slot} style={{backgroundColor:ValidateColor(r.type.name), color: 'white'}}>{r.type.name}</Label>)}
        </Grid.Column>

        <Grid.Column width={16} only='mobile'><Segment basic padded /><Segment basic padded /></Grid.Column>
      </Grid>

      <Grid columns={2} centered stackable>
      
        <Grid.Column width={11}>
          <Segment stacked raised>
          
          {/* <Label color='red' floating>22</Label> */}

            <Image src={ pokemon.image } size='medium' centered className='imagefix' />
            
            <Divider horizontal>
              <Header as='h1' className='cap'>
              { pokemon.name }
              </Header>

              <Header.Subheader>
              <Label size='large' basic># { pokemon.id }</Label>
              </Header.Subheader>
            </Divider>

          </Segment>
          
          
          <Segment>
            {}
          </Segment>


        </Grid.Column>

        <Grid.Column width={5}>
          <Segment>
          <Header as='h2' icon textAlign='center'>Stats Base</Header>
          <Divider />
            <ProgressBar value={ pokemon.hp } label='HP'/>
            <ProgressBar value={ pokemon.speed } label='Speed'/>
            <ProgressBar value={ pokemon.attack } label='Attack'/>
            <ProgressBar value={ pokemon.defense } label='Defense'/>
          </Segment>
        </Grid.Column>
      </Grid>
      
      <Grid stackable columns='equal'>
        { pokemon.habilities.map(res =><Grid.Column><Segment textAlign='center'>{upperCase(res.ability.name)}</Segment></Grid.Column>) }
      </Grid>
      
      <Grid stackable columns='equal'>
        { pokemon.moves.map(res =><Grid.Column><Label textAlign='center'>{upperCase(res.move.name)}</Label></Grid.Column>) }
      </Grid>

    </Container>
  )
}

export default Pokemon;