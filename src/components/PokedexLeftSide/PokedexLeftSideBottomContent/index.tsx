import "./index.css";

export const PokedexLeftSideBottomContent = () =>{
    
    return(
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
    );
}