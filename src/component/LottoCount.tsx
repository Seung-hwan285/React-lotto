interface LottoCountProps{
    lottoList : number[];
}

function LottoCount({lottoList}: LottoCountProps){

    return(

        <>
        <span className="lotto-text">

            총{lottoList.length}개 구매하였습니다.


        </span>
            {lottoList.map(($el,index)=>(
                <span key={index} className="lotto-emoji">{`🎟️`}</span>
            ))}

        </>


    )
}

export default LottoCount;