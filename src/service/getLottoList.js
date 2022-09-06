import createLotto from "./createLotto";

function getLottoList({numOfLotto}){


    return [...Array(numOfLotto)].map(()=>createLotto());
}
export default getLottoList;