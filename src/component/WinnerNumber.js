import {Component, useEffect, useState} from "react";
import {WINNING_NUMBER_BUNUS_NUMBER, WINNING_NUMBER, getDrawNumber} from "../utils/LottoRules";
import "../css/winning-number.css"
import "../css/lotto-ball.css"
import LottoBal from "../utils/LottoBal";
import {showState} from "../atom/atom";
import {useRecoilState} from "recoil";


function WinnerNumber({onShowModal}){

    const [isShowWinningNumbers,setShow] =useRecoilState(showState);

    // [x] 3초있다가 로또 고정 당첨번호 출력
    useEffect(()=>{

        setTimeout(()=>{
            onShoWinningNumber();
        },2000);


    },[]);



    const onShoWinningNumber=()=>{
        setShow(true);
    }


    return isShowWinningNumbers ?(

        <div className="draw-number-wrapper">

            <div className="result-day">
                <span>958회차 당첨번호 2022.08.30</span>
            </div>

        <section className="draw-number-section">
            {getDrawNumber.winngNumber.map(($el,index)=>(
                <LottoBal number={$el} key={index} />
            ))}
            <span className="plus-icon">+</span>
            {
                <LottoBal number={getDrawNumber.bounsNumber}/>
            }
        </section>

            <button type="button" className="open-btn" onClick={onShowModal} >당첨결과 확인</button>
            </div>
    ) :(
        <span>잠시만 기다려주세요</span>
    )


}

export default WinnerNumber;

// class WinnerNumber extends Component{
//
//     constructor(props) {
//         super(props);
//
//         this.state={
//             isShowWinningNumbers : false
//         }
//
//         this.showWinningNumbers=this.showWinningNumbers.bind(this);
//         this.drawNumber = this.getDrawNumber();
//         console.log(this.drawNumber);
//
//         this.props.setDrawNumber(
//             {drawNumber : this.drawNumber}
//         )
//     }
//
//
//     getDrawNumber(){
//          return{
//              winningNumbers : WINNING_NUMBER,
//              bounsNumber : WINNING_NUMBER_BUNUS_NUMBER
//          }
//     }
//
//
//     componentDidMount() {
//         // this.props.setDrawNumber({drawNumber: this.drawNumber});
//
//         setTimeout(()=>{
//             this.showWinningNumbers();
//         },1000);
//     }
//
//     showWinningNumbers(){
//         this.setState({isShowWinningNumbers : true});
//     }
//
//     render() {
//
//         return this.state.isShowWinningNumbers ?(
//             <div className="draw-number-wrapper">
//
//                 <div className="result-day">
//                     <span>958회차 당첨번호 2022.08.30</span>
//                 </div>
//
//
//
//                 <section className="draw-number-section">
//
//                     {this.drawNumber.winningNumbers.map(($el)=>(
//                         <LottoBal key={$el} number={$el}/>
//                     ))}
//
//
//                     <span className="plus-icon">+</span>
//
//                     <LottoBal number={this.drawNumber.bounsNumber}/>
//                 </section>
//
//                 {/*<div className="draw-number-section">*/}
//                 {/*    <span>당첨번호 {WINNING_NUMBER.join(', ')} 보너스번호 {WINNING_NUMBER_BUNUS_NUMBER}</span>*/}
//                 {/*</div>*/}
//
//                 <button type="button" className="open-btn" onClick={this.props.onShowWinningResult}>당첨결과 확인</button>
//             </div>
//
//         ) :(
//             <span>잠시만 기다려주세요~</span>
//         )
//     }
// }


