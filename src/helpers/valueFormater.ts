export const valueFormater= (number:number) => {
    let string:string = number.toString();
    if(number<10){
        string = `0.${number}`;
    }
    else {
        string = (number/10).toString();     
    }
    return string
}