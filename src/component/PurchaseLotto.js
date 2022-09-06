import React, {Component, useState} from "react";

import "../css/purchase-lotto.css"
import Lotto from "./Lotto";
import LottoGenerator from "../utils/LottoGenerator";
import GetLottoCount from "./getLottoCount";



function PurchaseLotto({lottolist}){

    const [isToggle,setToggle] =useState(false);

    let displaySectionName="display-section";


    if(isToggle){
        displaySectionName+='toggle';
    }

    const onChangeToggle=(e)=>{
        setToggle(e.target.checked);
    }

    return(
        <div className="purchase-lotto-container">
            {/*몇개 구매했는지 ,이모지 보여주는 selection*/}
            <section>
                <GetLottoCount lottolist={lottolist} onChangeToggle={onChangeToggle}/>
                <input id="switch" type="checkbox" onChange={onChangeToggle}/>
                <label htmlFor="switch" className="label-on-off"></label>
            </section>

        {/*    로또 번호 보여주는 selection*/}
        <section className={displaySectionName}>
            <LottoGenerator lottolist={lottolist}/>
        </section>


        </div>
    )
}
export default PurchaseLotto;

//
// export  default  class PurchaseLotto extends Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             isToggle : false
//         }
//
//         this.onChangeToggleButton=this.onChangeToggleButton.bind(this);
//     }
//
//
//     onChangeToggleButton(e){
//
//         this.setState({
//             isToggle : e.target.checked,
//         });
//     }
//
//     render() {
//
//         const {lottoList} =this.props;
//         let displaySelectionName = "display-section";
//
//         if(this.state.isToggle){
//
//             displaySelectionName+='toggle';
//
//         }
//
//         return (
//             <div className="purchase-lotto-container">
//                 <section>
//                     <span className="lotto-text">총 {lottoList.length}개 구매하였습니다.</span>
//
//
//                     {lottoList.map(($el)=>(
//                         <span className="lotto-emoji">🎟️</span>
//                     ))}
//                     <input id="switch" type="checkbox" onChange={this.onChangeToggleButton}/>
//                     <label htmlFor="switch" className="label-on-off"></label>
//                 </section>
//
//                 <section className={displaySelectionName}>
//
//                     {lottoList.map(($el,index)=>(
//                         <Lotto lotto={$el} key={index}/>
//                     ))}
//                 </section>
//             </div>
//         );
//     }
// }