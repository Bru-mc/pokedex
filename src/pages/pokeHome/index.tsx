import { Link } from "react-router-dom";
import "./index.css"
import pokeLogo from "../../assets/pokelogo.png";
import { PokemonContext } from "../../contexts/Pokemon";
import { useContext } from "react";


export const PokeHome = () =>{
  const {pokemonSeen} = useContext(PokemonContext) 
  console.log(pokemonSeen)
  return(
      <div className="pokeMenu">
        <img src={pokeLogo} alt="Pokemon" />
        <ul>
          <Link to={`/pokemons`}>
            <li>ALL POKEMONS</li>
          </Link>
        </ul>
      </div>
  );
}
