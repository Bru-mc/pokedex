import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { pokeApiQuerys as pokemonsQuery } from "../../../helpers/pokeApiQuerys";
import * as constants from "../../../constants"
import './index.css';
import { pokeList } from "../../../interfaces";
import { PokemonContext } from "../../../contexts/Pokemon";
import { useContext} from "react";


export const PokemonsList = () => {
  const {pokemonSeen} = useContext(PokemonContext)
  const { data, isFetching } = useQuery<pokeList>(`pokemonList`, () => pokemonsQuery(constants.pokeListApiUrl));
  
  if(isFetching){
    return <p>Loading...</p>
  }
  const alreadySeen = (pokeName:string) =>{
    if(pokemonSeen[pokeName]){
      return <></>
    }
    else{
      return <div className='newIcon'>
        <p>NEW</p>
      </div>
    }
  }
  return(
    <ul className="pokemonList">
      { data?.results.map<JSX.Element>((result, index) =>( 
        <Link to={`/pokemons/${result.name}`} key={result.name}>
          <li className = {result.name}>
            {`${index+1} ${result.name.toUpperCase()}`}
            {alreadySeen(result.name)}
            {/* <div className='newIcon'>
              <p>NEW</p>
            </div> */}
          </li>
        </Link>
      ))}
    </ul>
  );
} 