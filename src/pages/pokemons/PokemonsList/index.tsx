import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { pokeApiQuerys as pokemonsQuery } from "../../../helpers/pokeApiQuerys";
import * as constants from "../../../constants"
import { I_PokeList as pokeList } from "../../../interfaces/I_PokeList";
import './index.css';

export const PokemonsList = () => {
    const { data, isFetching } = useQuery<pokeList>(`pokemonList`, () => pokemonsQuery(constants.pokeListApiUrl));
    return(
        <ul className="pokemonList">
            { data?.results.map<JSX.Element>(result =>{ 
                return <Link to={`/pokemons/${result.name}`} key={result.name}>
                  <li className = {result.name}>
                    {result.name.toUpperCase()}
                    <div className='newIcon'>
                      <p>NEW</p>
                    </div>
                  </li>
                </Link>
            })}
        </ul>
    );
} 