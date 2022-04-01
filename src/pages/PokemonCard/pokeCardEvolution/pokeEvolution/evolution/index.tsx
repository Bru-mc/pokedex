import { useQuery } from "react-query";
import { pokeApiQuerys as evolutionQuery } from "../../../../../helpers/pokeApiQuerys";
import * as constants from "../../../../../constants";
import { pokemon } from "../../../../../interfaces";
import { Link } from "react-router-dom";
import "./index.css";
import { useContext } from "react";
import { PokemonContext } from "../../../../../contexts/Pokemon";


export const Evolution = (props:{evolution:{name:string, img:string}, currentPoke:string}) => {
  
  // const {pokemonSeen, setPokemonSeen} = useContext(PokemonContext);

  // const {data , isFetching, isFetched} = 
  // useQuery<pokemon>(`evolution${props.pokemonEv}`, ()=> 
  // evolutionQuery(`${constants.apiUrl}/pokemon/${props.pokemonEv}`));
  // if(isFetching){
  //   return <p>Loading...</p>
  // }

  // const pokeData = {
  //   name : data?.name!,
  //   img : data?.sprites.other.dream_world.front_default!
  // }

  /*Criando o array de evolution no context*/ 
  // if(!pokemonSeen[props.currentPoke].evolutions){
  //   pokemonSeen[props.currentPoke].evolutions = [];
  // }
  /*So adiciona ao array se ainda nao tiver o pokemon e quando o dado do pokemon for valido*/ 
  // else if(!pokemonSeen[props.currentPoke].evolutions?.find(specie => (specie===pokeData.name)) 
  // && pokeData.name!=undefined){
  //   pokemonSeen[props.currentPoke].evolutions?.push(pokeData.name);
  // }

  const isCurrent = () =>{
    if(props.evolution.name === props.currentPoke){
      return <div style={{border:'1px solid #d19d2c'}} 
      className="pokeEvolutionIcon">
        <img src={props.evolution.img} alt={props.evolution.name} className='pokeEvolutionImg' />
      </div>
    }
    else{
      return <Link to={`/pokemons/${props.evolution.name}`} 
      className="evolution">
        <div className="pokeEvolutionIcon">
          <img src={props.evolution.img} alt={props.evolution.name} />
        </div>
      </Link>
    }
    }
  return(
      isCurrent()
  );
}