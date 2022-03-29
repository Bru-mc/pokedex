import React, { createContext } from "react";

type animationPropertys = {
    ledRef:React.MutableRefObject<any> | undefined,
    addAnimation:(() => void) | undefined,
    removeAnimation:(() => void) | undefined
}
const defaultValue:animationPropertys = {
    ledRef: undefined,
    addAnimation:undefined,
    removeAnimation:undefined
}
export const LedAnimationContext = createContext(defaultValue);

export const LedAnimationProvider = ({children}:any) =>{
    return <LedAnimationContext.Provider value={defaultValue}>
        {children}
    </LedAnimationContext.Provider>
}