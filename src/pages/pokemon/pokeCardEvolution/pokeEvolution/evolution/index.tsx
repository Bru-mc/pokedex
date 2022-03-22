import { useQuery } from "react-query";
import { pokeApiQuerys as evolutionQuery } from "../../../../../helpers/pokeApiQuerys";
import * as constants from "../../../../../constants";
import { pokemon } from "../../../../../interfaces/interfaces";
import { Link } from "react-router-dom";
import "./index.css";


export const Evolution = (props:{pokemonEv:string, currentPoke:string}) => {
  
  console.log("ENTREI")
  const {data , isFetching} = 
  useQuery<pokemon>(`evolution${props.pokemonEv}`, ()=> 
  evolutionQuery(`${constants.apiUrl}/pokemon/${props.pokemonEv}`))
  console.log("Query voltou pokemon:")
  console.log(data?.name)
  
  const pokeData = {
    name : data?.name!,
    img : data?.sprites.other.dream_world.front_default!
  }
  const isCurrent = () =>{
    if(pokeData.name === props.currentPoke){
      return <div style={{
        backgroundColor:"black",
        border:'1px solid #d19d2c',
        height:'60px',
        width:'60px',
        borderRadius:'50%',
        overflow:"hidden"  
      }} className="pokeEvolutionIcon">
        <img style={
          {height:"70px"}
        } src={pokeData.img} alt={pokeData.name} />
      </div>
    }
    else{
      return <Link to={`/pokemons/${pokeData.name}`} 
      className="evolution">
        <div style={{
          backgroundColor:"black",
          height:'60px',
          width:'60px',
          borderRadius:'50%',
          overflow:"hidden"
        }}className="pokeEvolutionIcon">
          <img style={
            {height:"70px"}
            } src={pokeData.img} alt={pokeData.name} />
        </div>
      </Link>
    }
    }
  return(
      isCurrent()
  );
}