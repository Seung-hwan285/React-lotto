import {Component} from "react";

export default class Lotto extends Component{

    render() {

        const lotto =this.props.lotto;
        console.log(lotto);
        return(
            <div className="lotto">
                <span className="lotto-emoji">🎟️</span>
                <span className="lotto-number">{lotto.join(', ')}</span>
            </div>
        )
    }
}