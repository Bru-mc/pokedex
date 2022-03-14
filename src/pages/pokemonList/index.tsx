import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import './index.css'


type pokeList = {
    count: number,
    next: string,
    previous: any,
    results: [{name: string, url: string}]
}

export const PokemonList = () => {
    const baseUrl: string = 'https://pokeapi.co/api/v2';
    const { data, isFetching } = useQuery<pokeList>(`pokemonList`,async () => {
        const response = await axios.get(baseUrl+ `/pokemon?limit=150`);
        return response.data;
    });
    return(
        <ul className='pokemonList'>
            { data?.results.map<JSX.Element>(result =>{ 
                return <Link to={`/pokemons/${result.name}`} key={result.name}>
                  <li className = {result.name}>
                    {result.name.toUpperCase()}
                    <div className='newIcon'>
                      <p>New</p>
                    </div>
                  </li>
                </Link>
                })}
        </ul>
    );
} 