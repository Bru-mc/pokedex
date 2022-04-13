export const changeSidePokedex = (side:string) => {
    if(side==="right"){
        document.body.style.top = "initial";
        document.body.style.bottom = "0";
    }
    else if(side==="left"){
        document.body.style.top = "0";
        document.body.style.bottom = "initial";
    }
}