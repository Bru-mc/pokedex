import axios from "axios";
import { useQuery } from "react-query";
import { useParams} from "react-router-dom";
import * as constants from "../../constants";
import { pokeApiQuerys as pokeApiFetch  } from "../../helpers/pokeApiQuerys";
import { chain, pokemon, pokeSpecie } from "../../interfaces/interfaces";
import './index.css'
import { PokeCardEvolution } from "./pokeCardEvolution";
import { PokeCardTop } from "./pokeCardTop";


export const PokemonCard = () =>{
  const {name} = useParams();

  const pokemonQuery = 
  useQuery<pokemon>(`pokemon`, () => 
  pokeApiFetch(`${constants.apiUrl}/pokemon/${name}`));

  const{
    data:pokemonData,
    isFetching:isPokemonFetching,
    error:pokemonError
  } = pokemonQuery;

  const pokeSpecieQuery = 
  useQuery<pokeSpecie>(`pokeSpecie`, () => 
  pokeApiFetch(pokemonData?.species.url!));

  const{
    data:pokeSpecieData,
    isFetching:isPokeSpecieFetching,
    error:pokeSpecieError
  } = pokeSpecieQuery;
  
  const pokeEvolChainQuery = 
  useQuery<chain, Error>(`pokeEvolChain`, () => 
  pokeApiFetch(pokeSpecieData?.evolution_chain.url!));

  const{
    data:pokeEvolChainData,
    isFetching:isPokeEvolChainFetching,
    error:pokeEvolChainError
  } = pokeEvolChainQuery;

  // const {data , isFetching} = useQuery<pokemon>(`pokemon`,async () => {
  //     const baseUrl: string = 'https://pokeapi.co/api/v2';
  //     const response = await axios.get(`${baseUrl}/pokemon/${name}`);
  //     return response.data;
  // })
  
  const pokemonPropertys = {
    name: pokemonData?.name,
    img: pokemonData?.sprites.other.dream_world.front_default,
    types: pokemonData?.types
  }
  // const isString = (varString:string | undefined) =>{
  //   if(varString){
  //     return <PokeCardEvolution url={varString}></PokeCardEvolution>
  //   }
  //   return <></>
  // }

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
        {/* {isString(data?.species.url)} */}
      {/* <PokeCardEvolution url={varString}></PokeCardEvolution> */}
    </div> 
    
  );
}