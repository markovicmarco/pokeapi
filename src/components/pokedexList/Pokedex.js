import PokedexItem from "./PokedexItem.js";
import {useDarkMode} from "../../provider/AuthProvider.js";

const Pokedex = () => {

  const {isDark, darkOn, darkOff} = useDarkMode();

  document.body.style.backgroundColor= isDark? "rgb(0,0,0)" : "rgb(255,255,255)";

  return(
    <div>
      Pokedex
      <button onClick={() => darkOn()}>Dark On</button>
      <button onClick={() => darkOff()}>Dark Off</button>
      <PokedexItem/>
    </div>
  )
}

export default Pokedex