import { useQuery } from "react-query";
import { pokeApiQuerys as pokeEvolutionQuerys } from "../../../../helpers/pokeApiQuerys";

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
  
  const {data, isFetching, error} = useQuery<chain, Error>(`chain`, () => pokeEvolutionQuerys(props.url));
  if (isFetching) return <span>'Loading...'</span>
  if (error) return <span>Error:{error.message}</span>
  
  const verificaSpecies = (evolutionChain: evolutionChain) =>{
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
      {verificaSpecies(data?.chain!).map((evolutionName)=>{
      return <p key={evolutionName}>{evolutionName}</p>})} 
    </div>
  );
}