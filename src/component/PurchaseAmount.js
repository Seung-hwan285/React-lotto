import React, {Component, useState} from 'react';
import "../css/purchase-lotto.css"
import payForLotto from "../service/payForLotto";
import PayForLotto from "../service/payForLotto";
import PayOfLotto from "../service/payForLotto";
import PayLotto from "../service/payForLotto";


function PurchaseAmount({onPurchaseLotto}){


    const [vaildMessenger,setVaildMessenger] =useState('');

    const onSubmit=(e)=>{

        e.preventDefault();


        const money = e.target.input.value;

        const {change, numOfLotto} = PayLotto(money);

        if(change >0){
            alert(`현재 거스름돈은 ${change} 입니다`);
        }
        onPurchaseLotto({numOfLotto});
    }



    const onChange=(e)=>{


        const currentValue = e.target.value;

        if(currentValue <1000){
            setVaildMessenger('1000원 미만은 구입 불가입니다.');

            return;
        }

        setVaildMessenger('');

    }

    return(

        <div className="amount-wrapper">
            <form onSubmit={onSubmit}>
                
                <input type="text"
                       name="input"
                       placeholder="구입금액"
                       onChange={onChange}
                />

                <button
                    type="submit"
                    className="input-button"
                >확인</button>
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