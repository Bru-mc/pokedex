import { useQuery } from "react-query";
import { pokeApiQuerys  as pokeSpeciesQuery} from "../../../helpers/pokeApiQuerys";
import { pokeSpecie } from "../../../interfaces";
import { PokeEvolution } from "./pokeEvolution";
import "./index.css";
import { PokemonContext } from "../../../contexts/Pokemon";
import { useContext } from "react";

export const PokeCardEvolution = (props:{url:string, name:string}) => {
  const {pokemonSeen, setPokemonSeen} = useContext(PokemonContext);
  const {data , isFetching} = 
  useQuery<pokeSpecie>(`specie-${props.name}`, () => 
  pokeSpeciesQuery(props.url));
  
  const pokemonSpecie = {
    color: data?.color.name,
    url: data?.evolution_chain.url
  }
  
  pokemonSeen[props.name].color= pokemonSpecie.color;
  
  const isString = (varString:string | undefined) =>{
    if(varString){
      return <PokeEvolution 
      url={varString} 
      name={props.name}/>
    }
    return <></>
  }
  return(
    <>
      {isString(pokemonSpecie.url)}
    </>
  );
}