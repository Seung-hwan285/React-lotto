import {Component} from "react";
import {BUNUS_NUMBER, WINNING_NUMBER} from "../utils/LottoRules";
import "../css/winning-number.css"

class WinnerNumber extends Component{

    constructor() {
        super();

        this.state={
            isShowWinningNumbers : false
        }

        this.showWinningNumbers=this.showWinningNumbers.bind(this);
    }


    componentDidMount() {
        setTimeout(()=>{
            this.showWinningNumbers();
        },1000);
    }

    showWinningNumbers(){
        this.setState({isShowWinningNumbers : true});
    }

    render() {

        return this.state.isShowWinningNumbers ?(
            <div>

                <div className="result-day">
                    <span>958회차 당첨번호 2022.08.30</span>
                </div>

                <div>
                    <span>당첨번호 {WINNING_NUMBER} 보너스번호 {BUNUS_NUMBER}</span>
                </div>


                <button type="button" className="open-btn" onClick={this.props.onShowWinningResult}>당첨결과 확인</button>
            </div>

        ) :(
            <span>잠시만 기다려주세요~</span>
        )
    }
}


export default WinnerNumber;