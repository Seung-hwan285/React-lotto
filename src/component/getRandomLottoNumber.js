export const generateRandomLotto=(min,max)=>{
    return Math.floor(Math.random() * (max-min))+min;
}