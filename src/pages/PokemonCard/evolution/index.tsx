import { Link } from "react-router-dom";
import "./index.css";


export const Evolution = (props:{evolution:{name:string, img:string}, currentPoke:string}) => {
  
  const isCurrent = () =>{
    if(props.evolution.name === props.currentPoke){
      return <div style={{border:'2px solid #949090'}} 
      className="pokeEvolutionIcon">
        <img src={props.evolution.img} alt={props.evolution.name} className='pokeEvolutionImg' />
      </div>
    }
    else{
      return <Link to={`/pokemons/${props.evolution.name}`} >
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