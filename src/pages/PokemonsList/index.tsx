import { Link } from "react-router-dom";
import './index.css';
import { useRef } from "react";
import { PokemonsListCard } from "./PokemonsListCard";

export const PokemonsList = () => {
    
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