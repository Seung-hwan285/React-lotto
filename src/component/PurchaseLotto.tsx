import React, {Component, useState} from "react";


import "../css/purchase-lotto.scss"

import LottoGenerator from "../utils/LottoGenerator";
import LottoCount from "./LottoCount";
import LottoCheckBox from "./LottoCheckBox";
import {useRecoilState} from "recoil";
import {ToggleState} from "../atom/atom";

interface PurchaseLottoProps{
    lottoList  : any[];

}


function PurchaseLotto({lottoList} : PurchaseLottoProps){

    const [isToggle,setToggle] =useRecoilState(ToggleState);

    let displaySectionName="display-section";

    if(isToggle){
        displaySectionName+='toggle';
    }

    const onChangeToggle=(e : any)=>{
        setToggle(e.target.checked);
    }

    return(
        <div className="purchase-lotto-container">

            <LottoCount lottoList={lottoList}/>
            <LottoCheckBox onChangeToggle={onChangeToggle}/>
            <LottoGenerator lottoList={lottoList} displaySectionName={displaySectionName}/>
        </div>
    )
}
export default PurchaseLotto;
