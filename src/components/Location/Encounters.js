import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EncounterItem from "./EncounterItem"
import {useDarkMode, useNumItems} from "../../provider/AuthProvider.js";
import {Link} from 'react-router-dom';
import "../settings/Settings.css";
import Pagination from '../Pagination.js';

const Encounters = () => {

  // Pagination

  const [currentPage, setCurrentPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0);
  const {itemsPerPage} = useNumItems();

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth", });
  };


  const {id} = useParams();

  const {isDark} = useDarkMode();

  const [encounters, setEncounters] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  document.body.style = `background: ${isDark? 'rgb(29, 27, 27)' : 'rgb(253, 253, 253)'}`;

  const upperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    const promise = axios(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`);
    const promise2 = axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
    promise.then(res => {
      setEncounters(res.data);
      setTotalItems(res.data.length);
    })
     promise2.then(res => {
      setPokemonName(upperCase(res.data.name));
    })
  }, [id]);


  const indexOfLastEncounter = currentPage * itemsPerPage;
  const indexOfFirstEncounter = indexOfLastEncounter - itemsPerPage;
  const currentEncountersShowed = encounters.slice(indexOfFirstEncounter, indexOfLastEncounter);



  return(
    <section 
    className="container"
    style={{color: isDark? "white" : "black"}}>

      <div className="text-left p-absolute">
        <Link 
        to={`/pokedex/pokemon/${id}`}
        className="back-button"
        style={{color: isDark ? 'white' : 'black'}}>
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>

      <h2 className="title">{pokemonName} encounters</h2>
      
      <div className="row">
        {currentEncountersShowed.map((encounter) => {
          return<EncounterItem 
                key={encounter.location_area.url.split('https://pokeapi.co/api/v2/location-area/')[1]} 
                encounter={encounter.location_area.name} />
        })}
      </div>
      
      {/* If there aren't */}
      {!encounters.length && <div style={{color: 'red'}}>
        it seems like there aren't encounters for {pokemonName}
      </div>}

      <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={totalItems} changePage={changePage}/>
    </section>
  )
}

export default Encounters;