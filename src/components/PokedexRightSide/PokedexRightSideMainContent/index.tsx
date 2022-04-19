import "./index.css";
import { DescriptionScreen } from '../../../components/DescriptionScreen';

export const PokedexRightSideMainContent = () =>{
    let rightSideMainButtons = [];
    let lastCharCode = 64;
    for(let i = 1; i<11; i++){
        if(i<9){
            rightSideMainButtons.push(
                <div key={'rS_MB_'+i} className='RS_MButton'>
                  <p className='RS_MButtonNumber'>{i}</p>
                  <p className='RS_MButtonLetters'>
                      {
                        String.fromCharCode(lastCharCode + 1, lastCharCode + 2, lastCharCode + 3)
                      }
                  </p>
                </div>
            );
            lastCharCode += 3
        }
        else if(i===9){
          rightSideMainButtons.push(
            <div key={'rS_MB_'+i} className='RS_MButton'>
              <p className='RS_MButtonNumber'>{i}</p>
              <p className='RS_MButtonLetters'>
                  {
                    String.fromCharCode(lastCharCode + 1, lastCharCode + 2)
                  }
              </p>
            </div>
        );
        }
        else{
            rightSideMainButtons.push(
                <div key={'rS_MB_'+i} className='RS_MButton'>
                  <p className='RS_MButtonNumber'>0</p>
                  <p className='RS_MButtonLetters'>__</p>
                </div>
            );
        }
    }
    
    return(
        <div className="pokedexRightSideMainContent">
            <div className="pokedexRightSideMainScreen">
              <DescriptionScreen/>
            </div>
            <div className="pokedexRightSideMainButtons">
              {rightSideMainButtons}
            </div>
        </div>
    );
}