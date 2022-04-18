//Hooks
import { useParams} from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { QueryFunction, QueryKey, useQueries, useQuery} from "react-query";
//helpers
import { pokeApiQuerys } from "../../helpers/pokeApiQuerys";
import { valueFormater } from "../../helpers/valueFormater";
import { numberToString } from "../../helpers/numberToString";
import { allUseQueriesSuccess } from "../../helpers/allUseQueriesSuccess";
//interfaces
import { chain, evolutionChain, pokemon, pokeSpecie } from "../../interfaces";
//contexts
import { DescriptionRenderContext } from "../../contexts/DescriptionRender";
import { LedAnimationContext } from "../../contexts/LedAnimation";
import { CurrentPokemonContext } from "../../contexts/CurrentPokemon";
import { PokemonContext } from "../../contexts/Pokemon";
//components
import { PokeCardEvolution } from "./PokeCardEvolution";
import { PokeCardTop } from "./PokeCardTop";
import { PokemonCardProperty } from "./PokeCardPropertys";
import { Loading } from "../../components/Loading";
//style
import './index.css'


export const PokemonCard = () =>{
  const {ledRefState} = useContext(LedAnimationContext);
  const {pokemonSeen, setPokemonSeen} = useContext(PokemonContext);
  let {currentPokemonDetails, setCurrentPokemonDetails} = useContext(CurrentPokemonContext);
  const {setDescriptionRender} = useContext(DescriptionRenderContext)
  const [pokemonPropertys, setPokemonPropertys] = useState({
    name: '',
    id: '',
    img: '',
    types: [''],
    weight: '',
    height: '',
    color: '',
    habitat: ''
  })

  const baseUrl: string = 'https://pokeapi.co/api/v2';
  const {name} = useParams();

  //----Adding LED animation ---
  useEffect(()=>{
    if(ledRefState.addAnimation){
      ledRefState.addAnimation!();
    }
  })

  //-----POKEMON QUERY----- 
  const pokemonUseQuery = useQuery<pokemon>(
    ['pokemon', name],
    () => pokeApiQuerys(`${baseUrl}/pokemon/${name}`)
  );
  const {data:pokemonDATA} = pokemonUseQuery;

  const pokemon = {
    name: pokemonDATA?.name,
    id: pokemonDATA?.id,
    img: pokemonDATA?.sprites.other.dream_world.front_default,
    types: pokemonDATA?.types,
    specieURL: pokemonDATA?.species.url,
    weight: pokemonDATA?.weight,
    height: pokemonDATA?.height
  }
  
  
  //-----POKEMON SPECIE QUERY----- 
  const pokeSpecieUseQuery = useQuery<pokeSpecie>(
    ['specie', pokemon.name], 
    () => pokeApiQuerys(pokemon.specieURL!),
    {
      enabled: !!pokemon.specieURL, //verify if specieURL is true to can start query
    }
  );
  const {data:pokemonSpecieDATA} = pokeSpecieUseQuery
  
  const pokemonSpecie = {
    color: pokemonSpecieDATA?.color.name,
    evolutionChainURL: pokemonSpecieDATA?.evolution_chain.url,
    habitat: pokemonSpecieDATA?.habitat,
    descriptions: pokemonSpecieDATA?.flavor_text_entries
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
  useEffect(()=>{
    if(pokeSpecieUseQuery.isSuccess){
        setPokemonPropertys({
          name: pokemon.name!,
          id: numberToString(pokemon.id!),
          img: pokemon.img!,
          types: pokemon.types!.map(currentType => (currentType.type.name)),
          weight: valueFormater(pokemon.weight!) + ' KG',
          height: valueFormater(pokemon.height!) + ' M',
          color: pokemonSpecie.color!,
          habitat: pokemonSpecie.habitat?.name!
        })
        if(!pokemonSeen[pokemonPropertys.name!]){
          pokemonSeen[pokemonPropertys.name!] = pokemonPropertys;
          setPokemonSeen(pokemonSeen);
        }
    }
  },[pokemon, pokemonPropertys, pokemonSpecie, pokeSpecieUseQuery.isSuccess])
  useEffect(()=>{
    if(pokemonSpecie.descriptions){
      if(currentPokemonDetails.currentPokemon !== pokemonPropertys.name!){
        currentPokemonDetails.currentPokemon = pokemonPropertys.name!
        currentPokemonDetails.descriptionArray = pokemonSpecie.descriptions! 
        setCurrentPokemonDetails({...currentPokemonDetails});
        setDescriptionRender(true);
      }
    }
  },[pokemonSpecie.descriptions, currentPokemonDetails, pokemonPropertys, pokemonSeen,
    setCurrentPokemonDetails, setPokemonSeen, setDescriptionRender])
  

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

  let pokemonsEvolution = [{
    evolutionName: '',
    evolutionImg: ''
  }]
  let render = false;

  if(allUseQueriesSuccess(pokeEvolutionChainSpeciesUseQueries)){
    pokemonsEvolution = pokeEvolutionChainSpeciesUseQueries
    .map(pokeEvolutionChainSpecieUseQuerie => 
      {
        return {
          evolutionName: pokeEvolutionChainSpecieUseQuerie.data?.name!,
          evolutionImg: pokeEvolutionChainSpecieUseQuerie.data?.sprites.other.dream_world.front_default!
        } 
      }
      );
    //just render when all useQueries of evolution chain was successed
    render = true; 
  }
  
  return(
    render?
    <div className="pokeCardContainer">
      <div className="pokeCard"> 
        <PokeCardTop color = {pokemonSpecie.color!} name = {pokemon.name!}  
        img = {pokemon.img!} types = {pokemon.types!}/>
        <PokemonCardProperty pokemonPropertys={pokemonPropertys}/>
        <div className="PokeEvolutionsContainer"> 
          <PokeCardEvolution pokemonEvolution={pokemonsEvolution} 
          currentPoke = {pokemon.name!}/>
        </div> 
      </div> 
    </div>: 
    <Loading/>
  );
}