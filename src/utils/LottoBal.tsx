interface LottoBallProps{
    number : number;
}

function LottoBal({number} :LottoBallProps){


    let ballClassName;


    if(number < 10){
        ballClassName='zeros';
    }else if(number <20){
        console.log(number);
        ballClassName='tens';
    }else if(number < 30){
        ballClassName='twenties';
    }else if(number <40){
        ballClassName='thirty';
    }else{
        ballClassName='forty';
    }


    return(
        <span className={`lotto-ball ${ballClassName}`}>{number <10 ? `0${number}` : number}</span>
    )
}

export default LottoBal;