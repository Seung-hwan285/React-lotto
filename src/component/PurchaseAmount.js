import React, {Component} from 'react';

class PurchaseAmount extends Component {


    constructor(props) {
        super(props);


        this.state={
            Messeage : '',
        }

        this.onSubmit=this.onSubmit.bind(this);
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

    render() {
        return (
            <div>

                <form onSubmit={this.onSubmit}>
                    <input

                        id="purcahse-amount-input"
                        name="input"
                        placeholder="구입금"


                    />

                    <button type="submit" className="input-button">확인</button>

                </form>
            </div>
        );
    }
}

export default PurchaseAmount;