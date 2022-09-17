import {Component} from "react";
import "../css/lotto.scss"

interface LottoProps{
    lotto : any;
}


function Lotto({lotto} : LottoProps){
    return(

        <div className="lotto">

            <span className="lotto-emoji">🎟️</span>
            <span className="lotto-number">{lotto.join(', ')}</span>
        </div>
    )
}
export default Lotto;