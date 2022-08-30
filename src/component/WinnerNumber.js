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



// class WinnerNumber extends Component{
//
//
//     constructor() {
//         super();
//
//         this.state={
//             isShowWinningNumbers: false
//         }
//
//         this.showWinningNumbers=this.showWinningNumbers.bind(this);
//     }
//
//
//
//     // 마운트 생성됐을때 setTimeout 으로 잠시후 , 당첨번호 출력
//     componentDidMount() {
//
//         setTimeout(()=>{
//             this.showWinningNumbers();
//         },3000);
//     }
//
//     showWinningNumbers(){
//         this.setState({isShowWinningNumbers :true});
//     }
//
//     render() {
//         //  false : 잠시후에  , true : 당첨번호 보너스번호
//         return this.state.isShowWinningNumbers ?(
//             <div>
//                 <div>
//                     <span>당첨번호 :{WINNING_NUMBER}      보너스 번호 :{BUNUS_NUMBER}</span>
//
//                 </div>
//
//
//
//
//         <button type="button" onClick={this.props.onShowWinningResult}>결과 확인하기</button>
//             </div>
//         ):(
//
//             <span>잠시후에 공개</span>
//         )
//     }
// }

export default WinnerNumber;