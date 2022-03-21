import { useQuery } from "react-query";
import { pokeApiQuerys as evolutionQuery } from "../../../../../helpers/pokeApiQuerys";
import * as constants from "../../../../../constants";
import { pokemon } from "../../../../../interfaces/interfaces";
import { Link } from "react-router-dom";


export const Evolution = (props:{pokemonEv:string, currentPoke:string}) => {
  
  console.log(props.pokemonEv)
  const {data , isFetching} = 
  useQuery<pokemon>(`evolution${props.pokemonEv}`, ()=> 
  evolutionQuery(`${constants.apiUrl}/pokemon/${props.pokemonEv}`))
  
  console.log(data)
  
  const pokeData = {
    name : data?.name!,
    img : data?.sprites.other.dream_world.front_default!
  }
  const isCurrent = () =>{
    if(pokeData.name === props.currentPoke){
      return <div style={{
        backgroundColor:"black",
        border:'1px solid #d19d2c',
        height:'50px',
        borderRadius:'50%',
        overflow:"hidden"  
      }} className="pokeEvolutionIcon">
        <img style={
          {height:"50px"}
        } src={pokeData.img} alt={pokeData.name} />
      </div>
    }
    else{
      return <Link to={`/pokemons/${pokeData.name}`} 
      className="evolution">
        <div style={{
          backgroundColor:"black",
          height:'50px',
          borderRadius:'50%',
          overflow:"hidden"
        }}className="pokeEvolutionIcon">
          <img style={
            {height:"50px"}
            } src={pokeData.img} alt={pokeData.name} />
        </div>
      </Link>
    }
    }
  return(
    
      isCurrent()
    
    // <div className="evolution">
    // </div>
  );
}