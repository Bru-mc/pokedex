import { useQuery } from "react-query";
import { pokeApiQuerys  as pokeSpeciesQuery} from "../../../helpers/pokeApiQuerys";
import { pokeSpecie } from "../../../interfaces";
import { PokeEvolution } from "./pokeEvolution";
import "./index.css";
import { PokemonContext } from "../../../contexts/Pokemon";
import { useContext } from "react";
import { hexColors } from "../../../constants";


export const PokeCardEvolution = (props:{url:string, name:string, refstate: React.MutableRefObject<any>}) => {
  const {pokemonSeen, setPokemonSeen} = useContext(PokemonContext);
  const {data , isFetching} = 
  useQuery<pokeSpecie>(`specie-${props.name}`, () => 
  pokeSpeciesQuery(props.url));
  
  const pokemonSpecie = {
    color: data?.color.name,
    url: data?.evolution_chain.url
  }
  
  if(pokemonSpecie.color){ //verify if pokemon color is not undefined 
    pokemonSeen[props.name].color = pokemonSpecie.color;//set the pokemon color to pokemonSeen context
    props.refstate.current.style.backgroundColor = hexColors[pokemonSpecie.color] //set the background card color 
  }
  
  // const isString = (varString:string | undefined) =>{
  //   if(varString){
  //     return <PokeEvolution 
  //     url={varString} 
  //     name={props.name}/>
  //   }
  //   return <></>
  // }
  // return(
  //   <>
  //     {isString(pokemonSpecie.url)}
  //   </>
  // );
}