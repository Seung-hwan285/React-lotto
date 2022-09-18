
import React from "react";
import Lotto from "./Lotto";

interface LottoGeneratorProps {
    lottoList : number[];
    displaySectionName: string;
}

function LottoGenerator({lottoList,displaySectionName} : LottoGeneratorProps){

    return(

        <section className={displaySectionName}>
                <span>
                    {lottoList.map(($el,index)=>(
                        <Lotto lotto={$el} key={index}/>
                    ))}
            </span>

        </section>
    )
}

export default LottoGenerator;