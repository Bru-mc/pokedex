import { Link } from "react-router-dom";
import back from "../../../assets/back.png"
import { pokemonPropertys } from "../../../interfaces";
import './index.css';

export const PokeCardTop = (props:pokemonPropertys) =>{
return(
  <div className="pokeCardTop">
    <div className="pokeCardHeader">
      <div className="pokeballMiddleTop"></div>
      <Link to={`/pokemons`}>
        <img className="back" 
        src={back} 
        alt="Back"/>
      </Link>
      <h1 className="pokeCardTitle">
        {props.name?.toLocaleUpperCase()}
      </h1>
    </div>
    <div className="scenery">
      <img className="pokeImg" 
      src={props.img} 
      alt={props.name}/> 
    </div>
  </div>
);

}
