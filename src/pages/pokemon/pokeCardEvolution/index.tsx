import { useQuery } from "react-query";
import { pokeApiQuerys  as pokeSpeciesQuery} from "../../../helpers/pokeApiQuerys";
import { pokeSpecie } from "../../../interfaces/I_PokeSpecie";
import { PokeEvolution } from "./pokeEvolution";

export const PokeCardEvolution = (props:{url:string}) => {
  console.log(props.url)
  const {data , isFetching} = useQuery<pokeSpecie>(`specie`, () => pokeSpeciesQuery(props.url));
  
  const pokemonSpecie = {
    color: data?.color.name,
    url: data?.evolution_chain.url
  }
  const isString = (varString:string | undefined) =>{
    if(varString){
      return <PokeEvolution url={varString}></PokeEvolution>
    }
    return <></>
  }
  return(
    <div className="pokeEvolutionContainer">
      {isString(pokemonSpecie.url)}
    </div>
  );
}