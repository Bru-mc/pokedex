import "./index.css";
import { LedAnimationContext} from '../../../contexts/LedAnimation';
import { useContext, useEffect, useRef } from "react";

export const PokedexLeftSideHeader = () =>{
    const animationLed = useRef<any>(null);
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
    });
    
    return(
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
    );
}