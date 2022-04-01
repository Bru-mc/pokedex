import { useQuery } from "react-query";
import { pokeApiQuerys as pokeEvolutionQuery } from "@helpers/pokeApiQuerys";
import { chain, evolutionChain } from "../../../../interfaces";
import { Evolution } from "./evolution";
import "./index.css";

export const PokeEvolution = (props:{url:string,name:string}) => {
  //query for pokemon evolutions
  const {data, isFetching, error} = 
  useQuery<chain, Error>(`chain-${props.name}`, () => 
  pokeEvolutionQuery(props.url));

  if (isFetching) return <span>'Loading...'</span>
  if (error) return <span>Error:{error.message}</span>
  
  
  //func that return array with species from evolution chain
  const createEvolutionArray = (evolutionChain: evolutionChain) =>{
    let speciesArray:Array<string> = []
    let current:Array<evolutionChain> = [evolutionChain]
    while(current.length>0){
      if(current[0].species){
        speciesArray.push(current[0].species.name!)
      }
      current = current[0].evolves_to
    }
    return speciesArray;
  }

  const evolutionArray = createEvolutionArray(data?.chain!)
  
  // return(      
  //   evolutionArray.length===1? //if have more than one, the
  //   <><h2>No Evolves</h2></>:                     //div evolution will be exibed
  //   <div className="pokeEvolutionContainer">
  //     <h2 className="pokeCardH2">EVOLUTION</h2>
  //     <div className="evolutions">
  //     {evolutionArray.map((evolutionName)=>{
  //       return <Evolution 
  //       key={evolutionName} 
  //       pokemonEv={evolutionName} 
  //       currentPoke={props.name}/>
  //     })} 
  //     </div>
  //   </div>
  // );
}