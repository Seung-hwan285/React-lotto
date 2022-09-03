import {Component} from "react";
import "../css/lotto.css"
export default class Lotto extends Component{

    render() {

        const lotto =this.props.lotto;

        return(
            <div className="lotto">
                <span className="lotto-emoji">🎟️</span>
                <span className="lotto-number">{lotto.join(', ')}</span>
            </div>
        )
    }
}