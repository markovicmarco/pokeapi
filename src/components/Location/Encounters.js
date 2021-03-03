import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EncounterItem from "./EncounterItem"
import 'semantic-ui-css/semantic.min.css';

const Encounters = () => {

  const {id} = useParams();

  const [encounters, setEncounters] = useState([])

  useEffect(() => {
    const promise = axios(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`);
    promise.then(res => {
      setEncounters(res.data);
      console.log(res.data);
    })
  }, [])

  return(
    <>
    <div className="Title-Encounter">Encounters</div>
    <ul className="container">
      {encounters.map((encounter) => {
        return(
  
          <EncounterItem 
          key={encounter.location_area.url.split('https://pokeapi.co/api/v2/location-area/')[1]} 
          encounter={encounter.location_area.name} />
        )
      })}
    </ul>
    </>
  )
}

export default Encounters;