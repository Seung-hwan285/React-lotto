import React, {Component, useState} from 'react';

import PayLotto from "../service/payForLotto";
import getLottoList from "../service/getLottoList";
import {useDispatch, useSelector} from "react-redux";
import {useRecoilState} from "recoil";
import {textState} from "../atom/atom";


function PurchaseAmount({setLottoList}){

    // atom 읽고 쓰게 하기 위해서는 useRecoilState 사용한다.
    // const [vaildMessenger,setVaildMessenger] =useState('');

    const [vaildMessenger, setVaildMessenger] = useRecoilState(textState);


    const onSubmit=(e)=>{
        e.preventDefault();

        const money = e.target.input.value;


        const {change ,numOfLotto} = PayLotto(money);


        if(change > 0){
            alert(`현재 거스름 돈은 ${change} 원입니다`);
        }

        setLottoList(getLottoList({numOfLotto}));


    }

    const onChange=(e)=>{

        const currentValue =e.target.value;

        if(currentValue <1000){

            setVaildMessenger(`1000원 미만은 입력 불가입니다.`);

            return;
        }

        setVaildMessenger('');
    }

    return(

        <div className="amount-wrapper">
            <form onSubmit={onSubmit}>

                <input

                    type="name"
                    name="input"
                    placeholder="구입 금액"
                    className="purchase-amount-input"
                    onChange={onChange}
                />


                <button className="input-button" type="submit">확인</button>
                <div>{vaildMessenger}</div>

            </form>



        </div>
    )
}


// class PurchaseAmount extends Component {
//     constructor(props) {
//         super(props);
//
//
//         this.state={
//             vaildMessenger : '',
//         }
//
//         this.onSubmit=this.onSubmit.bind(this);
//         this.onChange=this.onChange.bind(this);
//
//     }
//
//     onSubmit(e){
//         e.preventDefault();
//         const money = e.target.input.value;
//         // 거스름돈
//
//         const {change , numOfLotto} = payForLotto(money);
//
//         console.log(change);
//
//         if(change >0){
//             alert(`현재 거스름돈은 ${change} 입니다.`);
//         }
//         // numOfLotto  현재 금액 - 거스름돈 / 1000
//
//         this.props.onPurchaseLotto({numOfLotto});
//     }
//
//
//     onChange(e){
//
//         const currentInput= e.target.value;
//
//
//         if(currentInput < 1000){
//             this.setState({
//                 vaildMessenger : '1000원 미만은 입력 불가'
//             });
//             return;
//         }
//
//         this.setState({
//             vaildMessenger : '',
//         })
//
//     }
//
//
//     render() {
//         return (
//             <div className="amount-wrapper">
//
//                 <form onSubmit={this.onSubmit}>
//                     <input
//                         id="purchase-amount-input"
//                         name="input"
//                         placeholder="구입금액"
//                         onChange={this.onChange}
//
//                     />
//
//                     <button type="submit" className="input-button">확인</button>
//
//
//                     <div>{this.state.vaildMessenger}</div>
//
//                 </form>
//             </div>
//         );
//     }
// }

export default PurchaseAmount;