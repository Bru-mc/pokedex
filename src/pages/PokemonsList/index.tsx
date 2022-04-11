import { Link } from "react-router-dom";
import './index.css';
import { useContext, useEffect, useRef } from "react";
import { PokemonsListCard } from "./PokemonsListCard";
import { DescriptionRenderContext } from "../../contexts/DescriptionRender";
import { LedAnimationContext } from "../../contexts/LedAnimation";

export const PokemonsList = () => {

  const {ledRefState} = useContext(LedAnimationContext);
  const {setDescriptionRender} = useContext(DescriptionRenderContext)
  useEffect(()=>{
    setDescriptionRender(false)
    if(ledRefState.removeAnimation){
      ledRefState.removeAnimation!()
    }
  })  
  const testRef = useRef<any>(null);
  const goToTop = () =>{
    testRef.current?.scrollIntoView()
  }
  return(
    <div className='pokemonsPage'>
      <div className="pokemonsListHeader">
        <Link className="backButtonLink" to={"/"}>
          <button className="backButton" >
            BACK
          </button>
        </Link> 
        <button className="goToTop" onClick={goToTop}>
          TOP
        </button>
      </div>
      <div className="pokemonsListContainer">
        <section className="pokeListStart" ref={testRef}></section>
        <PokemonsListCard></PokemonsListCard>
      </div>
    </div>  
  );
} 