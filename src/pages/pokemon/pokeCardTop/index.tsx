import { Link } from "react-router-dom";
import back from "../../../assets/back.png"
import { pokemonPropertys } from "../../../interfaces/interfaces";
import './index.css';

export const PokeCardTop = (props:pokemonPropertys) =>{
return(
  <div className="pokeCardTop">
    <div className="pokeCardHeader">
      <Link to={`/pokemons`}>
        <img className="back" 
        src={back} 
        alt="Back"/>
      </Link>
      <h1 className="pokeCardTitle">
        {props.name?.toLocaleUpperCase()}
      </h1>
    </div>
    <img className="pokeImg" 
    src={props.img} 
    alt={props.name}/> 
  </div>
);

}
