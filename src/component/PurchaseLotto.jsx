import React, {Component} from "react";
export  default  class PurchaseLotto extends Component{
    constructor(props) {
        super(props);
        this.state={

            isToggle : false
        }
    }

    render() {
        return (
            <div className="purchase-lotto-container">
                <section>
                    <span>총 {this.props.lottoList.length}개 구매하였습니다.</span>
                </section>
            </div>
        );
    }
}