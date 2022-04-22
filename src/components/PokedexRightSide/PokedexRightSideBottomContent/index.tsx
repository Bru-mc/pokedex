import "./index.css";

export const PokedexRightSideBottomContent = () =>{
    
  return(
    <div className="pokedexRightSideBottomContent">
      <div className="lineLedsRightSide flex">
        <div className="lineLedRightSide"></div>
        <div className="lineLedRightSide"></div>
      </div>
      <div className="RS_BottomCircularLed circle yellow"></div>
      <div className="pokedexRightSideBottomButtons flex">
        <div className="RS_BButton"></div>
        <div className="RS_BButton"></div>
      </div> 
      <div className="pokedexRightSideBottomScreens flex">
        <div className="RS_BScreen"></div>
        <div className="RS_BScreen"></div>
      </div> 
    </div>
  );
}