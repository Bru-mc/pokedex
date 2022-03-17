import { useQuery } from "react-query";
import { pokeApiQuerys as pokeEvolutionQuery } from "../../../../helpers/pokeApiQuerys";

interface evolutionChain{
  evolves_to: evolutionChain[]
  species:{
    name:string | undefined,
    url:string | undefined,
  } 
}



interface chain{
  chain:evolutionChain
}
export const PokeEvolution = (props:{url:string}) => {
  //query for pokemon evolutions
  const {data, isFetching, error} = 
  useQuery<chain, Error>(`chain`, () => 
  pokeEvolutionQuery(props.url));

  if (isFetching) return <span>'Loading...'</span>
  if (error) return <span>Error:{error.message}</span>
  
  //func that return array with species from evolution chain
  const verifySpecies = (evolutionChain: evolutionChain) =>{
    let evolutionArray: string [] = [];
    let current:Array<evolutionChain> = [evolutionChain]
    while(current.length>0){
      if(current[0].species){
        evolutionArray.push(current[0].species.name!)
      }
      current = current[0].evolves_to
    }
    return evolutionArray
  }
  return(   
      
    <div>
      {verifySpecies(data?.chain!).map((evolutionName)=>{
      return <p key={evolutionName}>{evolutionName}</p>})} 
    </div>
  );
}