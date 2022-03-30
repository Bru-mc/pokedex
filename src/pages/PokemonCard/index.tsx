import { pokeApiQuerys as pokemonQuery } from "../../helpers/pokeApiQuerys";
import { useQuery } from "react-query";
import { useParams} from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { PokemonContext } from "../../contexts/Pokemon";

import { pokemon } from "../../interfaces";
import { PokeCardEvolution } from "./PokeCardEvolution";
import { PokeCardTop } from "./PokeCardTop";
import { PokemonCardType } from "./PokeCardType";
import './index.css'
import { hexColors } from "../../constants";

 
export const PokemonCard = () =>{
  
  const baseUrl: string = 'https://pokeapi.co/api/v2';
  const {name} = useParams();
  

  const pokemon = useQuery<pokemon>(`pokemon_${name}`,
  ()=>pokemonQuery(`${baseUrl}/pokemon/${name}`));
  const {data , isFetching} = pokemon;
  
  const pokemonPropertys = {
    name: data?.name,
    img: data?.sprites.other.dream_world.front_default,
    types: data?.types
  }
  
  const {pokemonSeen, setPokemonSeen} = useContext(PokemonContext);
  if(!pokemonSeen[pokemonPropertys.name!]){
    pokemonSeen[pokemonPropertys.name!] = pokemonPropertys;
  }
  const [color, setColor] = useState('#ffffff');
  const [render, setRender] = useState(false);
  
  useEffect(() => {
    setPokemonSeen(pokemonSeen);
    console.log('Entrei 1');
    if(data?.species.url){
      setRender(true);
    }
  }, [pokemonPropertys.name!]);
  
  return(
    render?
    <div className="pokeCardContainer">
      <div className="pokeCard" style={{backgroundColor:`${hexColors[color]}`}}>
        <PokeCardTop {...pokemonPropertys}/>
        <PokemonCardType {...pokemonPropertys}/>
        <PokeCardEvolution url={data?.species.url!} name={data?.name!}></PokeCardEvolution>
        {/* {isString(data?.species.url)} */}
      </div> 
    </div>: 
    <div>
      <p>Loading...</p>
    </div>
  );
}