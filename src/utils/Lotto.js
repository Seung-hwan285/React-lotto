import {Component} from "react";
import "../css/lotto.css"


function Lotto({lotto}){
    return(

        <div className="lotto">

            <span className="lotto-emoji">🎟️</span>
            <span className="lotto-number">{lotto.join(', ')}</span>
        </div>
    )
}
export default Lotto;