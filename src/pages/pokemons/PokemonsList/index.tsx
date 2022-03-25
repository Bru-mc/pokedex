import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { pokeApiQuerys as pokemonsQuery } from "../../../helpers/pokeApiQuerys";
import * as constants from "../../../constants"
import './index.css';
import { pokeList } from "../../../interfaces";
import { PokemonContext } from "../../../contexts/Pokemon";
import { useContext} from "react";


export const PokemonsList = () => {
    const { data, isFetching } = useQuery<pokeList>(`pokemonList`, () => pokemonsQuery(constants.pokeListApiUrl));
    const {pokemonSeen} = useContext(PokemonContext)
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
            { data?.results.map<JSX.Element>(result =>( 
                <Link to={`/pokemons/${result.name}`} key={result.name}>
                  <li className = {result.name}>
                    {result.name.toUpperCase()}
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