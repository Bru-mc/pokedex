import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import './index.css'
import { LegacyRef, useRef } from "react";


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
    const testRef = useRef<any>(null);
    const goToTop = () =>{
      testRef.current?.scrollIntoView()
    }
    return(
      <div className='pokemonList'>
        <ul ref={testRef}>
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
        <div className="pokemonListFotter">
          <Link className="backButtonLink" to={"/"}>
            <button className="backButton" >
              BACK
            </button>
          </Link> 
          <button className="goToTop" onClick={goToTop}>
            TOP
          </button>
        </div>
        
      </div>  
    );
} 