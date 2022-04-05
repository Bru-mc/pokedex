import { useContext } from "react";
import { Link } from "react-router-dom";
import back from "../../../assets/back.png"
import { LedAnimationContext } from "../../../contexts/LedAnimation";
import './index.css';
import nature from "../../../assets/nature.jpg"


export const PokeCardTop = (props:{name:string, img:string, types:[{
  type: {
      name: string;
      url: string;
  };
}]
}) =>{
  const{ledRefState} = useContext(LedAnimationContext);
  return(
    <div className="pokeCardTop">
      <div className="pokeCardHeader">
        <div className="pokeballMiddleTop"></div>
        <Link to={`/pokemons`}>
          <img className="back" 
          src={back} 
          alt="Back"
          onClick={ledRefState.removeAnimation}/>
        </Link>
        <h1 className="pokeCardTitle">
          {props.name?.toLocaleUpperCase()}
        </h1>
      </div>
      <div className="scenery">
        <img className="pokeImg" 
        src={props.img} 
        alt={props.name}/>
        <div className="typeIconsTop">
          {props.types.map(types => {
            return <img key={types.type.name} 
            src={require('../../../assets/Pokemon'+ types.type.name + 'TypeIcon.svg')} 
            alt={types.type.name}/>
          })}
        </div> 
      </div>
    </div>
  );

}
