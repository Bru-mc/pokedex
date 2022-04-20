//react Hooks
import { useContext, useEffect, useRef} from 'react';
//images
import arrowRight from '../../assets/caret-right-solid.png';
//helpers
import { disableElement } from '../../helpers/disableElement';
import { enableElement } from '../../helpers/enableElement';
import { changeSidePokedex } from '../../helpers/changeSidePokedex';
//components
import { PokedexLeftSideHeader } from './PokedexLeftSideHeader';
//contexts
import { PokedexContext } from '../../contexts/Pokedex';
//style
import "./index.css";
import { PokedexRightSideMainContent } from './PokedexLeftSideMainContent';


export const PokedexLeftSide = () => {
    const pokeFront = useRef<any>(null);
    const buttonChangeSideRight = useRef<any>(null);
    const {pokeRightSide, setCanChangeSidePokedex, setbuttonChangeSideRight} = useContext(PokedexContext)
  
    const removeCape = () => {
      disableElement(pokeFront)
      pokeRightSide!.current.style.position = 'relative';
      enableElement(pokeRightSide!)
      setCanChangeSidePokedex(true);
    }
    
    useEffect(() => {
      setbuttonChangeSideRight(buttonChangeSideRight);
    },[setbuttonChangeSideRight]);
    
    return(
        <div className="pokedex backColor">
          <PokedexLeftSideHeader/>
          <PokedexRightSideMainContent/>
          <div className="pokedexBottomContent flex">
            <div className="circularButton circle darkGray"></div>
            <div className="ledAndScreenContent">
              <div className="lineLeds flex">
                <div className="lineLed red"></div>
                <div className="lineLed blue"></div>
              </div>
              <div className="miniScreen green"></div>
            </div>
            <div className="crossButton flex">
              <div className="horizontalLine darkGray"></div>
              <div className="verticalLine darkGray"></div>
              <div className="horizontalLineOver darkGray"></div>
              <div className="crossCircle circle"></div>
            </div>
          </div>
          <div className="rightBorder backColor">
            <div className="topBorder"></div>
            <div className="bottomBorder"></div>
          </div>
          <img className="buttonChangePokeSide" src={arrowRight} alt="clique aqui" 
          ref={buttonChangeSideRight} onClick={()=>changeSidePokedex("right")}/>
          
          <div className="pokedexFront backColor" ref={pokeFront}>
            <div className="pokedexFrontTopRightOver backColor"></div>
            <img className="arrowRightIcon" src={arrowRight} alt="clique aqui" 
            onClick={removeCape}/>
          </div>
        </div>
    );
}