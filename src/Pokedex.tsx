import './Pokedex.css';
//react-router-dom
import { HashRouter, Route, Routes} from 'react-router-dom';
//react Hooks
import { useContext, useEffect, useRef, useState } from 'react';
//contexts
import { PokemonContextProvider } from './contexts/Pokemon';
import { LedAnimationContext, LedAnimationProvider } from './contexts/LedAnimation';
//pages components
import { PokeHome } from './pages/PokeHome';
import { PokemonsList } from './pages/PokemonsList';
import { PokemonCard } from './pages/PokemonCard';
import arrowRight from './assets/caret-right-solid.png'
import { disableElement } from './helpers/disableElement';
import { enableElement } from './helpers/enableElement';
import { changeSidePokedex } from './helpers/changeSidePokedex';


function Pokedex() {
  const pokeFront = useRef<any>(null);
  const pokeRightSide = useRef<any>(null);
  const animationLed = useRef<any>(null);
  const buttonChangeSide = useRef<any>(null);
  const [canChangeSidePokedex, setCanChange] = useState(false);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const removeCape = () => {
    disableElement(pokeFront)
    pokeRightSide.current.style.position = 'relative';
    enableElement(pokeRightSide)
    setCanChange(true);
    setClientWidth(document.body.clientWidth)
  }
  const handleResize = () => setClientWidth(document.body.clientWidth)
    
  
  let {ledRefState,setLedRefState} = useContext(LedAnimationContext)
  
  useEffect(() => {
    ledRefState.ledRef = animationLed;
    ledRefState.addAnimation = () =>{
      ledRefState.ledRef!.current.style.animationDuration = '1s';
    }
    ledRefState.removeAnimation = () =>{
      ledRefState.ledRef!.current.style.animationDuration = '0s';
    }  
    setLedRefState(ledRefState);
  
    window.addEventListener('resize', handleResize);

  },[]);
  
  useEffect(() => {
    if (document.body.clientWidth < 660 && canChangeSidePokedex){
      buttonChangeSide.current.style.visibility = "initial";
      pokeRightSide.current.style.left = "initial";
    }
  },[canChangeSidePokedex]);

  useEffect(() => { 
    if(clientWidth > 660){
      buttonChangeSide.current.style.visibility = "hidden";
      pokeRightSide.current.style.left = "-32px";
    }
    if (document.body.clientWidth < 660 && canChangeSidePokedex){
      console.log("Entrei aqui");
      buttonChangeSide.current.style.visibility = "initial";
      pokeRightSide.current.style.left = "initial";
    }
  },[clientWidth]);
  
  return (
    <div className='pokedexContainer'>
      <div className="pokedex backColor">
        <div className="pokedexHeader">
          <div className="leftContent flex">
            <div className="contentBottomBorder backColor"></div>
            <div className="contentBottomBorderL"></div>
            <div className="bigBackCircle circle flex lightGray">
              <div className="bigLed circle" ref={animationLed}></div>
            </div>
            <div className="ledS flex">
              <div className="ledSmall circle red"></div>
              <div className="ledSmall circle yellow"></div>
              <div className="ledSmall circle green"></div>
            </div>
          </div>
          <div className="rightContent"></div>
          <div className="rightContentOver backColor"></div>
        </div>
        <div className="pokedexMainContent">
          <div className="mainScreenContainer flex lightGray">
            <div className="mainScreenSLed flex">
              <div className="mainScreenLed circle red"></div>
              <div className="mainScreenLed circle red"></div>
            </div>
            <div className="mainScreen">
              <PokemonContextProvider> 
                <LedAnimationProvider>
                  <HashRouter>
                    <Routes>
                      <Route path='/' element = {<PokeHome />}/>
                      <Route path='/pokemons' element = {<PokemonsList/>}/>
                      <Route path='/pokemons/:name' element = {<PokemonCard/>}/>    
                    </Routes>    
                  </HashRouter>  
                </LedAnimationProvider>
              </PokemonContextProvider>
            </div>
            <div className="mainScreenLedB circle red"></div>
            <div className="mainSoundBox"></div>
          </div>
        </div>
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
        ref={buttonChangeSide} onClick={changeSidePokedex}/>
        
        <div className="pokedexFront backColor" ref={pokeFront}>
          <div className="pokedexFrontTopRightOver backColor"></div>
          <img className="arrowRightIcon" src={arrowRight} alt="clique aqui" 
           onClick={removeCape}/>
        </div>
      </div>
      <div className="pokedexRightSide" ref={pokeRightSide}>
        <div className="pokedexRightSideHeader">
          <div className="contentTopBorderLeftRS"></div>
          <div className="contentTopLeftRS"></div>
          <div className="contentTopBorderLeft2RS"></div>
          <div className="contentTopLeft2RS"></div>
          <div className="contentTopBorderLeftRSIn"></div>
          <div className="contentTopBorderRightRS"></div>
        </div>
        <div className="pokedexRightSideMainContent">
          <div className="pokedexRightSideMainScreen"></div>
        </div>
        <div className="leftBorder backColor">
          <div className="topBorder"></div>
          <div className="bottomBorder"></div>
        </div>
      </div>
    </div>
  );
  
}
export default Pokedex;

