import { gradient } from "../../../constants";
import { Link } from "react-router-dom";
import back from "../../../assets/back.png"
import './index.css';



export const PokeCardTop = (props:{color: string, name:string, img:string, types:[{
  type: {
      name: string;
      url: string;
  };
}]
}) =>{
  return(
    <div className="pokeCardTop" 
    style={{backgroundImage:
      `linear-gradient(${gradient[props.color][1]},${gradient[props.color][0]})`}}>
      <div className="pokeCardHeader">
        <Link to={`/pokemons`} className="back">
          <img  
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
