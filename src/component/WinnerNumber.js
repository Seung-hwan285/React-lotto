import {Component} from "react";
import {BUNUS_NUMBER, WINNING_NUMBER} from "../utils/LottoRules";

class WinnerNumber extends Component{


    constructor() {
        super();

        this.state={
            isShowWinningNumbers: false
        }

        this.showWinningNumbers=this.showWinningNumbers.bind(this);
    }



    // 마운트 생성됐을때 setTimeout 으로 잠시후 , 당첨번호 출력
    componentDidMount() {

        setTimeout(()=>{
            this.showWinningNumbers();
        },3000);
    }

    showWinningNumbers(){
        this.setState({isShowWinningNumbers :true});
    }

    render() {
        //  false : 잠시후에  , true : 당첨번호 보너스번호
        return this.state.isShowWinningNumbers ?(
            <div>
                <div>
                    <span>당첨번호 :{WINNING_NUMBER}      보너스 번호 :{BUNUS_NUMBER}</span>

                </div>




        <button type="button" onClick={this.props.onShowWinningResult}>결과 확인하기</button>
            </div>
        ):(
            
            <span>잠시후에 공개</span>
        )
    }
}

export default WinnerNumber;