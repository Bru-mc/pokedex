//react-router-dom
import { HashRouter, Route, Routes} from 'react-router-dom';
//react Hooks
import { useContext, useEffect, useRef, useState } from 'react';
import arrowRight from './assets/caret-right-solid.png';

import { changeSidePokedex } from '../../helpers/changeSidePokedex';


import { DescriptionRenderContextProvider } from '../../contexts/DescriptionRender';
import "./index.css";
import { PokedexRightSideHeader } from './PokedexRightSideHeader';
import { PokedexRightSideMainContent } from './PokedexRightSideMainContent';
import { PokedexRightSideBottomContent } from './PokedexRightSideBottomContent';

export const PokedexLeftSide = () => {
    const pokeRightSide = useRef<any>(null);
    const buttonChangeSideLeft = useRef<any>(null);
    

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



