import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import './index.css'
import { useRef } from "react";
import { PokemonsList } from "./PokemonsList";

export const Pokemons = () => {
    
    const testRef = useRef<any>(null);
    const goToTop = () =>{
      testRef.current?.scrollIntoView()
    }
    return(
      <div className='pokemonsPage' ref={testRef}>
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
          <PokemonsList></PokemonsList>
        </div>
      </div>  
    );
} 