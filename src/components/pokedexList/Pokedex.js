import PokedexItem from "./PokedexItem.js";
import {useDarkMode} from "../../provider/AuthProvider.js";
import {useState,useEffect} from 'react';
import axios from 'axios';
import './Pokedex.css';
import Pagination from "./Pagination.js";

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffest] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  let itemsPerPage = 16;

  useEffect(() => {
    const promise = axios(`https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${offset}`);   
    promise.then(res => {
      setPokemons(res.data.results);
      console.log(res.data.results)
      setTotalItems(res.data.count);
    });
  }, [itemsPerPage, offset]);

  const handlePage = (page) => {
    setCurrentPage(page);
    setOffest(itemsPerPage * (page-1));
  }

  return(
    <div className="container">
      <input/>
      <div className="row">
        {pokemons.map((value) => {
          return(
            <>
              <PokedexItem url={value.url}/>
            </>
          )
        })}
      </div>
      <Pagination 
      currentPage={currentPage} 
      itemsPerPage={itemsPerPage} 
      totalItems={totalItems} 
      changePage={handlePage}/>
    </div>
  )
}

export default Pokedex