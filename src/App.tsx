import React from 'react';
import './App.css';
import { PokemonScreen } from './PokemonScreen';


function App() {
  return (
    <div className='body'>
    <div className="pokedex backColor">
      <div className="pokedexHeader">
        <div className="leftContent flex">
          <div className="contentBottomBorder backColor"></div>
          <div className="contentBottomBorderL"></div>
          <div className="bigBackCircle circle flex lightGray">
            <div className="bigLed blue circle"></div>
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
          <div id="root" className="mainScreen darkGray">
            <PokemonScreen/>
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
          <div className="crossCircle circle"></div>
        </div>
      </div>
      <div className="rightBorder backColor">
        <div className="topBorder"></div>
        <div className="bottomBorder"></div>
      </div>
    </div>
    {/* <div id="root"></div>

      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    --> */}
  </div>
  );
}
export default App;
