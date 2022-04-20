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
import { PokedexLeftSideBottomContent } from './PokedexLeftSideBottomContent';


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
          <PokedexLeftSideBottomContent/>
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