import { Link } from "react-router-dom";
import "./index.css";
import pokeLogo from "../../assets/pokelogo.png";
import { DescriptionRenderContext } from "../../contexts/DescriptionRender";
import { useContext, useEffect } from "react";


export const PokeHome = () =>{
  const {setDescriptionRender} = useContext(DescriptionRenderContext)
  useEffect(()=>{
    setDescriptionRender(false)
  })
  return(
      <div className="pokeMenu">
        <img src={pokeLogo} alt="Pokemon" />
        <ul>
          <Link to={`/pokemons`}>
            <li>ALL POKEMONS</li>
          </Link>
        </ul>
      </div>
  );
}
