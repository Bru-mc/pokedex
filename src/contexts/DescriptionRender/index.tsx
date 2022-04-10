import { createContext, useState } from "react";

const [teste, setTeste] = useState(false)

type descriptionRender = {
    descriptionRender: boolean,
    setDescriptionRender: React.Dispatch<React.SetStateAction<boolean>>
}
const defaultValue:descriptionRender = {
    descriptionRender: false,
    setDescriptionRender: () => {}
}
export const DescriptionRenderContext = createContext(defaultValue)
export const DescriptionRenderContextProvider = ({children}:any) =>{
    const [descriptionRender, setDescriptionRender] = useState(defaultValue.descriptionRender)
    return(
        <DescriptionRenderContext.Provider value= {{descriptionRender, setDescriptionRender}}>
            {children}
        </DescriptionRenderContext.Provider>
    );
}