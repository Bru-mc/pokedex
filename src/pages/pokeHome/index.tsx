import { Link } from "react-router-dom";
import "./index.css"
import pokeLogo from "../../assets/pokelogo.png";
import { PokemonContext } from "../../contexts/Pokemon";
import { useContext } from "react";
import pokeMark from "../../assets/QuestionMarkSmall.png";


export const PokeHome = () =>{
  const {pokemonSeen} = useContext(PokemonContext) 
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
