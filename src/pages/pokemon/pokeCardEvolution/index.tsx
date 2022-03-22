import { useQuery } from "react-query";
import { pokeApiQuerys  as pokeSpeciesQuery} from "../../../helpers/pokeApiQuerys";
import { pokeSpecie } from "../../../interfaces/interfaces";
import { PokeEvolution } from "./pokeEvolution";
import "./index.css";

export const PokeCardEvolution = (props:{url:string, name:string}) => {
  const {data , isFetching} = 
  useQuery<pokeSpecie>(`specie-${props.name}`, () => 
  pokeSpeciesQuery(props.url));
  
  const pokemonSpecie = {
    color: data?.color.name,
    url: data?.evolution_chain.url
  }
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