import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { pokeApiQuerys as pokemonsQuery } from "../../../helpers/pokeApiQuerys";
import * as constants from "../../../constants"
import './index.css';
import { pokeList } from "../../../interfaces";
import { PokemonContext } from "../../../contexts/Pokemon";
import { useContext} from "react";
import { numberToString } from "../../../helpers/numberToString";
import questionMarkIcon from "../../../assets/questionMark.png";
import { hexColors } from "../../../constants";
import { LedAnimationContext } from "../../../contexts/LedAnimation";


export const PokemonsListCard = () => {
  const {ledRefState} = useContext(LedAnimationContext);
  const {pokemonSeen} = useContext(PokemonContext)
  const { data, isFetching} = useQuery<pokeList>(`pokemonList`, () => pokemonsQuery(constants.pokeListApiUrl));
  
  if(isFetching){
    return <p>Loading...</p>
  }
  
  const alreadySeen = (result:{name:string, url:string},id:number) =>{
    const pokeName = result.name;
    if(pokemonSeen[pokeName]){
      let color = pokemonSeen[pokeName].color!
      return <div className="pokemonListCard" style={{backgroundColor: `${hexColors[color]}`, 
      boxShadow: `0 3px 12px 0 ${hexColors[color]}`}}>
        <img className="pokemonListCard_icon" src={pokemonSeen[pokeName].img} alt={pokeName} />
        <h1 className="pokemonListCard_pokeName">{`${pokeName.toUpperCase()}`}</h1>
        <span className="pokemonListCard_pokeId">{`#${numberToString(id)}`}</span>
      </div>
    }
    else{
      return <div className="pokemonListCard gray opacity20">
        <img className="pokemonListCard_icon" src={questionMarkIcon} alt="Never seen" />
        <h1 className="pokemonListCard_pokeName">{`${pokeName.toUpperCase()}`}</h1>
        <span className="pokemonListCard_pokeId">???</span>
        </div> 
    }
  }
  return(
    <ul className="pokemonList">
      { data?.results.map<JSX.Element>((result, index) =>( 
        <Link to={`/pokemons/${result.name}`} key={result.name}>
          <li className = {result.name} onClick={ledRefState.addAnimation}>
            {alreadySeen(result, index+1)}
          </li>
        </Link>
      ))}
    </ul>
  );
} 