import PokedexItem from "./PokedexItem.js";
import {useDarkMode} from "../../provider/AuthProvider.js";
import {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Pokedex.css';
import Pagination from "../Pagination.js";

const Pokedex = () => {

  document.body.style="background: white;"

  // Pokemon List
  const [pokemons, setPokemons] = useState([]);



  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffest] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  let itemsPerPage = 16;


  const handlePage = (page) => {
    setCurrentPage(page);
    setOffest(itemsPerPage * (page-1));
    window.scrollTo({ top: 0, behavior: "smooth", });
  }



  // Search
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      history.push(`/pokedex/pokemon/${searchTerm}`);
    }
  };



  // switch of filter
  const [searchByPokemon, setSearchByPokemon] = useState(false);



  // Type
  const [typeList, setTypeList] = useState([]);
  const [type, setType] = useState('');

  // get TypeList
  useEffect(() => {
    const promise = axios(`https://pokeapi.co/api/v2/type`);
    promise.then(res => {
      setTypeList(res.data.results);
    });
  }, []);

  const handleType = (e) => {
    setType(e.target.value)
  }
  const [newPokemonList, setNewPokemonList] = useState([])
  useEffect(() => {
    if(type){
      const promise = axios(`https://pokeapi.co/api/v2/type/${type}`);
      promise.then(res => {
        setNewPokemonList(res.data.pokemon);
        setTotalItems(res.data.pokemon.length);
        setCurrentPage(1);
      })
    }
  }, [type]);

  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const currentPokemonShowed = newPokemonList.slice(indexOfFirstPokemon, indexOfLastPokemon);



  useEffect(() => {
    if(!type){
      const promise = axios(`https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${offset}`);   
      promise.then(res => {
        setPokemons(res.data.results);
        setTotalItems(res.data.count);
      });
    }
  }, [itemsPerPage, offset, type]);

  return(
    <div>
      <div className="container">
        <h2 className="title">Pokedex</h2>
        <div>
          <div className="center check-container">
            <span>type</span>
            <input
            type="checkbox"
            onChange={() => setSearchByPokemon(!searchByPokemon)}/>
            <span>pokemon</span>
          </div>
          {searchByPokemon ?
            <div className="center">
              <input 
              type="checkbox"
              id="check"
              />  
              <div className="box">
                <input 
                type="text"
                placeholder="Search Here..."
                onKeyDown={handleKeyDown}
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                />
                <label htmlFor="check"><i className="fas fa-search"></i></label>
              </div>
            </div>
          :
            <select onClick={handleType}>
              <option value="">All pokemons</option>
              {typeList.map((value) => 
                <option key={value.name} value={value.name}>
                  {value.name}
                </option>
              )}
            </select>
          }
        </div>
        <div className="row">
        {type ? 
          currentPokemonShowed.map((value) => {
            return(
              <div className="col-sm-2 col-lg-3" key={value.pokemon.url.split('https://pokeapi.co/api/v2/pokemon/')[1]}>
                <PokedexItem url={value.pokemon.url}/>
              </div>
            )
          })
        :
          pokemons.map((value) => {
            return(
              <div className="col-sm-2 col-lg-3" key={value.url.split('https://pokeapi.co/api/v2/pokemon/')[1]}>
                <PokedexItem url={value.url}/>
              </div>
            )
          })
        }
        </div>
        <Pagination 
        currentPage={currentPage} 
        itemsPerPage={itemsPerPage} 
        totalItems={totalItems} 
        changePage={handlePage}/>
      </div>
    </div>
  )
}

export default Pokedex