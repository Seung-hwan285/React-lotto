import React, {Component, useState} from "react";


import "../css/purchase-lotto.scss"

import LottoGenerator from "../utils/LottoGenerator";
import LottoCount from "./LottoCount";
import LottoCheckBox from "./LottoCheckBox";
import {useRecoilState} from "recoil";
import {ToggleState} from "../atom/atom";



function PurchaseLotto({lottolist}){

    const [isToggle,setToggle] =useRecoilState(ToggleState);

    let displaySectionName="display-section";

    if(isToggle){
        displaySectionName+='toggle';
    }

    const onChangeToggle=(e)=>{
        setToggle(e.target.checked);
    }

    return(
        <div className="purchase-lotto-container">

            <LottoCount lottolist={lottolist} onChangeToggle={onChangeToggle}/>
            <LottoCheckBox onChangeToggle={onChangeToggle}/>
            <LottoGenerator lottolist={lottolist} displaySectionName={displaySectionName}/>
        </div>
    )
}
export default PurchaseLotto;
