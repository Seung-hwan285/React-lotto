interface GeneratorRandomLottoProps{
    min : number;
    max : number;
}
export const GenerateRandomLotto=({min,max} : GeneratorRandomLottoProps)=>{
    return Math.floor(Math.random() * (max-min+1))+min;
}