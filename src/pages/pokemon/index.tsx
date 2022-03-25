import { pokeApiQuerys as pokemonQuery } from "../../helpers/pokeApiQuerys";
import { useQuery } from "react-query";
import { useParams} from "react-router-dom";
import { pokemon } from "../../interfaces";
import { PokeCardEvolution } from "./pokeCardEvolution";
import { PokeCardTop } from "./pokeCardTop";
import { PokemonCardType } from "./pokeCardType";
import './index.css'
import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/Pokemon";

 
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
  
  const {setPokemonSeen} = useContext(PokemonContext);
  useEffect(() => {
  setPokemonSeen({[pokemonPropertys.name!]:pokemonPropertys});
  }, [pokemonPropertys.name!]);

  const isString = (varString:string | undefined) =>{
    if(varString){
      return <PokeCardEvolution url={varString} name={data?.name!}></PokeCardEvolution>
    }
    return <></>
  }

  return(
    <div className="pokeCardContainer">
      <div className="pokeCard">
        <PokeCardTop {...pokemonPropertys}/>
        <PokemonCardType {...pokemonPropertys}/>
        {isString(data?.species.url)}
      </div> 
    </div>

  );
}