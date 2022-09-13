function LottoCount({lottolist}){

    return(

        <>
        <span className="lotto-text">

            총{lottolist.length}개 구매하였습니다.


        </span>
            {lottolist.map(($el,index)=>(
                <span key={index} className="lotto-emoji">{`🎟️`}</span>
            ))}

        </>


    )
}

export default LottoCount;