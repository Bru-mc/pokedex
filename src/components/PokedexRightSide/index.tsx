//react-router-dom
import { HashRouter, Route, Routes} from 'react-router-dom';
//react Hooks
import { useContext, useEffect, useRef, useState } from 'react';
//images
import arrowRight from '../../assets/caret-right-solid.png';
//helpers
import { changeSidePokedex } from '../../helpers/changeSidePokedex';
//components
import { PokedexRightSideHeader } from './PokedexRightSideHeader';
import { PokedexRightSideMainContent } from './PokedexRightSideMainContent';
import { PokedexRightSideBottomContent } from './PokedexRightSideBottomContent';
//contexts
import { PokedexContext } from '../../contexts/Pokedex';
//style
import "./index.css";

export const PokedexRightSide = () => {
    const pokeRightSide = useRef<any>(null);
    const buttonChangeSideLeft = useRef<any>(null);
    const {setPokeRightSide, setbuttonChangeSideLeft} = useContext(PokedexContext)
    
    useEffect(()=>{
        setPokeRightSide(pokeRightSide);
        setbuttonChangeSideLeft(buttonChangeSideLeft);
    });

    return(
        <div className="pokedexRightSide" ref={pokeRightSide}>
          <PokedexRightSideHeader/>
          <PokedexRightSideMainContent/>
          <PokedexRightSideBottomContent/>
          <div className="leftBorder backColor">
            <div className="topBorder"></div>
            <div className="bottomBorder"></div>
          </div>
          <img className="buttonChangePokeSideleft left" src={arrowRight} alt="clique aqui" 
          ref={buttonChangeSideLeft} onClick={()=>changeSidePokedex("left")}/>
        </div>
    );
}



