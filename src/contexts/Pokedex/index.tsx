import { createContext, useState } from "react";

type defaultValueType = {
    pokeRightSide: React.MutableRefObject<any> | undefined,
    setPokeRightSide: React.Dispatch<React.SetStateAction<React.MutableRefObject<any> | undefined>>,
    buttonChangeSideRight:  React.MutableRefObject<any> | undefined,
    setbuttonChangeSideRight: React.Dispatch<React.SetStateAction<React.MutableRefObject<any> | undefined>>,
    buttonChangeSideLeft:  React.MutableRefObject<any> | undefined,
    setbuttonChangeSideLeft: React.Dispatch<React.SetStateAction<React.MutableRefObject<any> | undefined>>,
    canChangeSidePokedex: boolean,
    setCanChangeSidePokedex: React.Dispatch<React.SetStateAction<boolean>>,
    clientWidth: number,
    setClientWidth: React.Dispatch<React.SetStateAction<number>>
}
const defaultValue: defaultValueType = {
    pokeRightSide: undefined,
    setPokeRightSide: () => {},
    buttonChangeSideRight: undefined,
    setbuttonChangeSideRight:() => {}, 
    buttonChangeSideLeft: undefined,
    setbuttonChangeSideLeft:() => {}, 
    canChangeSidePokedex: false,
    setCanChangeSidePokedex:() => {},
    clientWidth: document.body.clientWidth,
    setClientWidth: () => {}
}
export const PokedexContext = createContext(defaultValue) 

export const PokedexContextProvider = ({children}:any) => {
    const [pokeRightSide, setPokeRightSide] = useState(defaultValue.pokeRightSide);
    const [buttonChangeSideRight, setbuttonChangeSideRight] = useState(defaultValue.buttonChangeSideRight);
    const [buttonChangeSideLeft, setbuttonChangeSideLeft] = useState(defaultValue.buttonChangeSideLeft);
    const [canChangeSidePokedex, setCanChangeSidePokedex] = useState(defaultValue.canChangeSidePokedex);
    const [clientWidth, setClientWidth] = useState(defaultValue.clientWidth);
    return(
        <PokedexContext.Provider value={
            {
                pokeRightSide, setPokeRightSide, 
                buttonChangeSideRight, setbuttonChangeSideRight,
                buttonChangeSideLeft, setbuttonChangeSideLeft,
                canChangeSidePokedex, setCanChangeSidePokedex,
                clientWidth, setClientWidth
            }
        }>
            {children}
        </PokedexContext.Provider>
    )
}