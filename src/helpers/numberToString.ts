export const numberToString= (number:number) => {
    let string:string = number.toString();
    if(number<10){
        string = `00${number}`
    }
    else if(number<100){
        string = `0${number}`
    }
    return string
}