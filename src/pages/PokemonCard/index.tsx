import { pokeApiQuerys } from "../../helpers/pokeApiQuerys";
import { QueryFunction, QueryKey, useQueries, useQuery} from "react-query";
import { useParams} from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { PokemonContext } from "../../contexts/Pokemon";

import { chain, evolutionChain, pokemon, pokeSpecie } from "../../interfaces";
import { PokeCardTop } from "./PokeCardTop";
import { PokemonCardType } from "./PokeCardType";
import './index.css'
import { hexColors } from "../../constants/index";
import { Evolution } from "./evolution";

 
export const PokemonCard = () =>{
  
  const baseUrl: string = 'https://pokeapi.co/api/v2';
  const {name} = useParams();
  const pokeCard = useRef<any>(null);
  const [pokeCardRefState,setpokeCardRefState] = useState(pokeCard);
  const {pokemonSeen, setPokemonSeen} = useContext(PokemonContext);

  //-----POKEMON QUERY----- 
  const pokemonUseQuery = useQuery<pokemon>(
    ['pokemon', name],
    () => pokeApiQuerys(`${baseUrl}/pokemon/${name}`)
  );
  const {data:pokemonDATA} = pokemonUseQuery;

  const pokemon = {
    name: pokemonDATA?.name,
    img: pokemonDATA?.sprites.other.dream_world.front_default,
    types: pokemonDATA?.types,
    specieURL: pokemonDATA?.species.url
  }
  
  
  //-----POKEMON SPECIE QUERY----- 
  const pokeSpecieUseQuery = useQuery<pokeSpecie>(
    ['specie', pokemon.name], 
    () => pokeApiQuerys(pokemonDATA?.species.url!),
    {
      enabled: !!pokemonDATA?.species.url, //verify if specieURL is true to can start query
    }
  );
  const {data:pokemonSpecieDATA} = pokeSpecieUseQuery
  
  const pokemonSpecie = {
    color: pokemonSpecieDATA?.color.name,
    evolutionChainURL: pokemonSpecieDATA?.evolution_chain.url
  }

  //-----POKEMON EVOLUTION CHAIN QUERY-----
  const pokeChainUseQuery = useQuery<chain, Error>(
    ['chain', pokemon.name], 
    () => pokeApiQuerys(pokemonSpecie.evolutionChainURL!),
    {
      enabled: !!pokemonSpecie.evolutionChainURL, //verify if evolutionChainURL is true to can start query
    }
  );
  const {
    data:pokemonChainDATA, 
    isFetching:pokemonChainISFETCHING, 
    error:pokemonChainERROR
  } = pokeChainUseQuery;

  const pokemonChain = {
    chain: pokemonChainDATA?.chain
  }

  let evolutionChainSpeciesArray:Array<string> = []

  if(pokemonChain.chain){
    let currentEvolutionChain:Array<evolutionChain> = [pokemonChain.chain!] //Current recive the main pokemon
    while(currentEvolutionChain.length>0){                                  //chain array, that will be used in 
      if(currentEvolutionChain[0].species){                                 //a loop of arrays chain    
        evolutionChainSpeciesArray.push(currentEvolutionChain[0].species.name!)
      }
      currentEvolutionChain = currentEvolutionChain[0].evolves_to
    }
  }

  //-----POKEMON EVOLUTION CHAIN SPECIES QUERIES-----
  const pokeEvolutionChainSpeciesUseQueries = useQueries<{ 
    queryKey: QueryKey;
    queryFn: QueryFunction<pokemon, QueryKey>;
    enabled: boolean;
  }[]>(evolutionChainSpeciesArray 
    .map(evolutionChainSpecieName => { 
      return {
        queryKey: ['evolutionChainSpecie', evolutionChainSpecieName],
        queryFn: () => pokeApiQuerys(`${baseUrl}/pokemon/${evolutionChainSpecieName}`),
        enabled: !!evolutionChainSpecieName,
      }
    })
  )
  let render = false;

  const pokemonsEvolution = pokeEvolutionChainSpeciesUseQueries
  .map(pokeEvolutionChainSpecieUseQuerie => 
    {
      if(pokeEvolutionChainSpecieUseQuerie.isSuccess){
        render = true;
        const pokemonPropertys = {
          name: pokemon.name!,
          img: pokemon.img!,
          types: pokemon.types!.map(currentType => (currentType.type.name)),
          color: pokemonSpecie.color!
        }
        if(!pokemonSeen[pokemonPropertys.name!]){
          pokemonSeen[pokemonPropertys.name!] = pokemonPropertys;
        }
      }
      return {
        evolutionName: pokeEvolutionChainSpecieUseQuerie.data?.name!,
        evolutionImg: pokeEvolutionChainSpecieUseQuerie.data?.sprites.other.dream_world.front_default!,
        // evolutionType: pokeEvolutionChainSpecieUseQuerie.data?.types.map(currentType => (currentType.type.name))
      }
    }
  );
  
  useEffect(() => {
    setPokemonSeen(pokemonSeen);
  },[pokeEvolutionChainSpeciesUseQueries]);

  return(
    render?
    <div className="pokeCardContainer">
      <div className="pokeCard" style={{backgroundColor: hexColors[pokemonSpecie.color!] }}> 
        <PokeCardTop name = {pokemon.name!}  img = {pokemon.img!} />
        <PokemonCardType types={pokemon.types!}/>
        <p>{pokemon.name}</p>
        <div className="PokeEvolutionsContainer">
          {pokemonsEvolution.length === 1?
          <><h2>No Evolves</h2></>: //Fazer componente NoEvolves
          pokemonsEvolution.map(pokemonEvolution => 
            {return <>
              <h2 className="pokeCardH2">EVOLUTION</h2>
              <div className="evolutions"> 
              <Evolution key={pokemonEvolution.evolutionName} 
              evolution ={
                {
                  name : pokemonEvolution.evolutionName, 
                  img: pokemonEvolution.evolutionImg
                }
              } 
              currentPoke = {pokemon.name!}/>
              </div>
            </>})}
        </div>
      </div> 
    </div>: 
    <div>
      <p>Loading...</p> //Fazer componente Loading
    </div>
  );
}