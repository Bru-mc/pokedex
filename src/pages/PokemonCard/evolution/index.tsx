import { Link } from "react-router-dom";
import "./index.css";


export const Evolution = (props:{evolution:{name:string, img:string}, currentPoke:string}) => {
  
  const isCurrent = () =>{
    if(props.evolution.name === props.currentPoke){
      return <div style={{border:'1px solid #d19d2c'}} 
      className="pokeEvolutionIcon">
        <img src={props.evolution.img} alt={props.evolution.name} className='pokeEvolutionImg' />
      </div>
    }
    else{
      return <Link to={`/pokemons/${props.evolution.name}`} 
      className="evolution">
        <div className="pokeEvolutionIcon">
          <img src={props.evolution.img} alt={props.evolution.name} />
        </div>
      </Link>
    }
    }
  return(
      isCurrent()
  );
}