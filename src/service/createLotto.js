import {GenerateRandomLotto} from "../component/GeneratorRandomLotto";

function createLotto(arr=[]){

    const number = GenerateRandomLotto({min : 1, max :45});

    if(!arr.includes(number)){
        arr.push(number);
    }

    if(arr.length===6){
        return arr.sort((a,b)=>a-b);
    }

    console.log(arr);

    return  createLotto(arr);
}
export default createLotto;