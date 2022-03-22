import axios from "axios";
import { useQuery } from "react-query";
import { useParams} from "react-router-dom";
import { pokemon } from "../../interfaces/interfaces";
import './index.css'
import { PokeCardEvolution } from "./pokeCardEvolution";
import { PokeCardTop } from "./pokeCardTop";
 
export const PokemonCard = () =>{
  
  const {name} = useParams();
  const pokemon = useQuery<pokemon>(`pokemon_${name}`,async () => {
      const baseUrl: string = 'https://pokeapi.co/api/v2';
      const response = await axios.get(`${baseUrl}/pokemon/${name}`);
      return response.data;
  })
  const {data , isFetching} = pokemon;
  
  const pokemonPropertys = {
    name: data?.name,
    img: data?.sprites.other.dream_world.front_default,
    types: data?.types
  }
  
  const isString = (varString:string | undefined) =>{
    if(varString){
    
      return <PokeCardEvolution url={varString} name={data?.name!}></PokeCardEvolution>
    }
    return <></>
  }

  return(
    <div className="pokeCard">
      <PokeCardTop {...pokemonPropertys}></PokeCardTop> 
      <div className="pokeCardType">
        <h2 className="pokeCardH2">TYPE :</h2>
        <div className="typeOp">
          {pokemonPropertys.types?.map<JSX.Element>(types =>{
          return <p key={types.type.name}>{types.type.name.toUpperCase()}</p>
          })}
        </div> 
      </div>
        {isString(data?.species.url)}
    </div> 
    
  );
}