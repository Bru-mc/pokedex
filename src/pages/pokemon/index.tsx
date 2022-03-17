import axios from "axios";
import { useQuery } from "react-query";
import { useParams} from "react-router-dom";
import './index.css'
import { PokeCardEvolution } from "./pokeCardEvolution";
import { PokeCardTop } from "./pokeCardTop";
 


type pokemon = {
  name: string,
  species:{
    url:string
  },
  sprites:{
    other:{
      dream_world:{
        front_default:string
      }
    }
  },
  types: [
    {
      slot: number,
      type:{
        name:string,
        url:string
      }
    }
  ]
};


export const PokemonCard = () =>{
  const {name} = useParams();
  const {data , isFetching} = useQuery<pokemon>(`pokemon`,async () => {
      const baseUrl: string = 'https://pokeapi.co/api/v2';
      const response = await axios.get(`${baseUrl}/pokemon/${name}`);
      return response.data;
  })
  // console.log("AQUI " + data?.species.url)
  const pokemonPropertys = {
    name: data?.name,
    img: data?.sprites.other.dream_world.front_default,
    types: data?.types
  }
  const isString = (varString:string | undefined) =>{
    if(varString){
      return <PokeCardEvolution url={varString}></PokeCardEvolution>
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
      {/* <div className="pokeCardEvolution">
        <PokemonEvolution url={data?.species!.url!}></PokemonEvolution>
      </div>   */}
        {isString(data?.species.url)}
    </div> 
    
  );
}