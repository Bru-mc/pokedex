import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { pokeApiQuerys as pokemonsQuery } from "../../../helpers/pokeApiQuerys";
import * as constants from "../../../constants"
import './index.css';
import { pokeList } from "../../../interfaces";

export const PokemonsList = () => {
    const { data, isFetching } = useQuery<pokeList>(`pokemonList`, () => pokemonsQuery(constants.pokeListApiUrl));
    return(
        <ul className="pokemonList">
            { data?.results.map<JSX.Element>(result =>( 
                <Link to={`/pokemons/${result.name}`} key={result.name}>
                  <li className = {result.name}>
                    {result.name.toUpperCase()}
                    <div className='newIcon'>
                      <p>NEW</p>
                    </div>
                  </li>
                </Link>
            ))}
        </ul>
    );
} 