import { gradient } from "../../../constants";
import { useContext } from "react";
import { Link } from "react-router-dom";
import back from "../../../assets/back.png"
import { LedAnimationContext } from "../../../contexts/LedAnimation";
import './index.css';



export const PokeCardTop = (props:{color: string, name:string, img:string, types:[{
  type: {
      name: string;
      url: string;
  };
}]
}) =>{
  const{ledRefState} = useContext(LedAnimationContext);
  return(
    <div className="pokeCardTop" 
    style={{backgroundImage:
      `linear-gradient(${gradient[props.color][1]},${gradient[props.color][0]})`}}>
      <div className="pokeCardHeader">
        <Link to={`/pokemons`} className="back">
          <img  
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
        {/* <div className="typeIconsTop">
          {props.types.map(types => {
            return <img key={types.type.name} 
            src={require('../../../assets/Pokemon'+ types.type.name + 'TypeIcon.svg')} 
            alt={types.type.name}/>
          })}
        </div>  */}
      </div>
    </div>
  );

}
