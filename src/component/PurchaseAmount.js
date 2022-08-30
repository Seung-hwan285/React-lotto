import React, {Component} from 'react';
import "../css/purchase-lotto.css"
class PurchaseAmount extends Component {
    constructor(props) {
        super(props);


        this.state={
            vaildMessenger : '',
        }

        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        const purchaseAmount = e.target.input.value;

        // 거스름돈

        const change = purchaseAmount %1000;
        if(change >0){
            alert(`현재 거스름돈은 ${change} 입니다.`);
        }
        // numOfLotto  현재 금액 - 거스름돈 / 1000
        const numOfLotto = (purchaseAmount-change) /1000;

        this.props.onPurchaseLotto({numOfLotto});
    }


    onChange(e){

        const currentInput= e.target.value;
        console.log(currentInput);
        
        if(currentInput < 1000){
            this.setState({
                vaildMessenger : '1000원 미만은 입력 불가'
            });
            return;
        }

        this.setState({
            vaildMessenger : '',
        })

    }

    render() {
        return (
            <div>

                <form onSubmit={this.onSubmit}>
                    <input
                        id="purchase-amount-input"
                        name="input"
                        placeholder="구입금액"
                        onChange={this.onChange}
                    />

                    <button type="submit" className="input-button">확인</button>


                    <div>{this.state.vaildMessenger}</div>

                </form>
            </div>
        );
    }
}

export default PurchaseAmount;