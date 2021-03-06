import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

import {
    Container,
    Grid,
    Segment,
    Image,
    Label,
    Divider,
    Header,
    Icon,
    List,
    Button
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import {ProgressBar} from './ProgressBar'
import ValidateColor from '../ValidateColor';

import './Pokemon.css';

const Pokemon = () => {

    const {id} = useParams();
    const [type,
        setType] = useState('');
    const [pokemon,
        setPokemon] = useState({type: [], habilities: [], moves: []});
    const upperCase = (str) => str
        .charAt(0)
        .toUpperCase() + str.slice(1);

    useEffect(() => {
        const promise = axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
        promise.then(res => {
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
                habilities: res.data.abilities,
                moves: res.data.moves
            })
            setType(res.data.types[0].type.name);
        });
    }, [])

    document.body.style = `background: ${ValidateColor(type)};`;

    console.log(pokemon)

    return (
        <Container>

            <Grid>
                <Grid.Column floated='left' width={8} textAlign='left'>
                    <Link to={`/pokedex`}>
                        <Icon name='arrow left' color='black' size='large' floated='left'/>
                    </Link>
                </Grid.Column>

                <Grid.Column floated='right' width={8}>
                    <Link to={`/pokedex/pokemon/${id}/encounters`}>Encounters</Link>
                </Grid.Column>

                <Grid.Column floated='left' width={8} only='computer'>
                    <Image
                        src='https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png'
                        size='medium'/>
                </Grid.Column>

                <Grid.Column floated='right' width={8} only='computer'>
                    {pokemon
                        .type
                        .map(r => <Image
                            key={r.slot}
                            spaced='right'
                            src={`https://raw.githubusercontent.com/mauroWernly/Pokedex/master/images/types/${upperCase(r.type.name)}.png`}/>)}
                    {pokemon
                        .type
                        .map(r => <Label
                            className='cap'
                            key={r.slot}
                            style={{
                            backgroundColor: ValidateColor(r.type.name),
                            color: 'white'
                        }}>{r.type.name}</Label>)}
                </Grid.Column>

            </Grid>

            <Grid>

                <Grid.Column floated='left' width={8} only='mobile'>
                    <Image
                        src='https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png'
                        size='medium'/>
                </Grid.Column>

                <Grid.Column floated='right' width={8} only='mobile'>

                    <Image.Group size='mini'>
                        {pokemon
                            .type
                            .map(r => <Image
                                key={r.slot}
                                src={`https://raw.githubusercontent.com/mauroWernly/Pokedex/master/images/types/${upperCase(r.type.name)}.png`}/>)}
                    </Image.Group>

                    {pokemon
                        .type
                        .map(r => <Label
                            className='cap'
                            key={r.slot}
                            style={{
                            backgroundColor: ValidateColor(r.type.name),
                            color: 'white'
                        }}>{r.type.name}</Label>)}
                </Grid.Column>

                <Grid.Column width={16} only='mobile'><Segment basic padded='very'/></Grid.Column>
            </Grid>

            <Grid columns={2} centered stackable>

                <Grid.Column width={12}>
                    <Segment stacked raised>
                        <Image src={pokemon.image} size='medium' centered className='imagefix'/>
                        <Grid columns='2' textAlign='center'>
                            <Grid.Column>
                                <Header as='h2' content={pokemon.weight} subheader='Weight'/>
                            </Grid.Column>

                            <Grid.Column><Header as='h2' content={pokemon.height} subheader='Height'/></Grid.Column>
                        </Grid>

                        <Divider horizontal>
                            <Header as='h1' className='cap'>
                                {pokemon.name}
                            </Header>

                            <Header.Subheader>
                                <Label size='large' basic># {pokemon.id}</Label>
                            </Header.Subheader>
                        </Divider>

                    </Segment>
                    
                    







<Grid columns='2' stackable>
    <Grid.Column>
        <Segment centered>
            <Divider horizontal>
                <Header as='h1' className='cap' content='Type'/>
                </Divider>
                <Grid columns='equal'>
                        {pokemon.type.map(r =>
                            <Grid.Column textAlign='center'>
                              <Label
                                className='cap'
                                key={r.slot}
                                style={{
                                backgroundColor: ValidateColor(r.type.name),
                                color: 'white'
                            }}>{r.type.name}</Label>
                            </Grid.Column>)}
                  </Grid>
                    </Segment>
  </Grid.Column>

  <Grid.Column>
    <Segment>
      <Divider horizontal>
        <Header as='h1' className='cap' content='Abilities'/>
        </Divider>
        <Grid stackable columns='equal'>
          {pokemon.habilities.map(res =>
          <Grid.Column>
            <Segment textAlign='center'>{upperCase(res.ability.name)}</Segment>
            </Grid.Column>
            )}
            </Grid>
            </Segment>
            </Grid.Column>
            
</Grid>





                  <Segment>
                    <Divider horizontal>
                        <Header as='h1' className='cap' content='Stats Base'/>
                      </Divider>
                        <ProgressBar value={pokemon.hp} label='HP'/>
                        <ProgressBar value={pokemon.speed} label='Speed'/>
                        <ProgressBar value={pokemon.attack} label='Attack'/>
                        <ProgressBar value={pokemon.defense} label='Defense'/>
                    </Segment>
                          
                          </Grid.Column>

                <Grid.Column width={4}>
                    
<Segment>
<Button icon='map marker alternate' color='green' content='Encounters' fluid/>
    </Segment>

<Segment>
  <Divider horizontal>
    <Header as='h1' className='cap' content='Movements'/>
    </Divider>
    <Grid stackable columns='4'>

    <List divided verticalAlign='middle' ordered relaxed animated>
    
      {pokemon.moves.map(res =>
      
        <List.Item>{upperCase(res.move.name)}</List.Item>
        
        )}
        </List>
        </Grid>
</Segment>


                    
                </Grid.Column>
            </Grid>


        </Container>
    )
}

export default Pokemon;