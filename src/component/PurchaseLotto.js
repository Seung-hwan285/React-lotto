import React, {Component} from "react";

import "../css/purchase-lotto.css"
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";
import Lotto from "./Lotto";
export  default  class PurchaseLotto extends Component{
    constructor(props) {
        super(props);
        this.state={
            isToggle : false
        }

        this.onChangeToggleButton=this.onChangeToggleButton.bind(this);
    }


    onChangeToggleButton(e){

        this.setState({
            isToggle : e.target.checked,
        });


        console.log(this.state.isToggle);
    }

    render() {

        const {lottoList} =this.props;
        let displaySelectionName = "display-section";

        if(this.state.isToggle){

            displaySelectionName+='toggle';
            console.log(displaySelectionName);
        }

        return (
            <div className="purchase-lotto-container">
                <section>
                    <span className="lotto-text">총 {lottoList.length}개 구매하였습니다.</span>


                    {lottoList.map(($el)=>(
                        <span className="lotto-emoji">🎟️</span>
                    ))}
                    <input id="switch" type="checkbox" onChange={this.onChangeToggleButton}/>
                    <label htmlFor="switch" className="label-on-off"></label>
                </section>

                <section className={displaySelectionName}>

                    {lottoList.map(($el,index)=>(
                        <Lotto lotto={$el} key={index}/>
                    ))}
                </section>
            </div>
        );
    }
}