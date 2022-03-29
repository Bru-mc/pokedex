import React, { createContext, useState } from "react";

type defaultValueType = {
    ledRefState:animationPropertys,
    setLedRefState:React.Dispatch<React.SetStateAction<animationPropertys>>
}

type animationPropertys = {
    ledRef:React.MutableRefObject<any> | undefined,
    addAnimation:(() => void) | undefined,
    removeAnimation:(() => void) | undefined
}
const defaultValue:defaultValueType = {
    ledRefState:{
        ledRef: undefined,
        addAnimation:undefined,
        removeAnimation:undefined
    },
    setLedRefState: () => {}
}
export const LedAnimationContext = createContext(defaultValue);

export const LedAnimationProvider = ({children}:any) =>{
    const [ledRefState, setLedRefState] = useState (defaultValue.ledRefState)
    return <LedAnimationContext.Provider value={{ledRefState, setLedRefState}}>
        {children}
    </LedAnimationContext.Provider>
}