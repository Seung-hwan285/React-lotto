
import React from "react";
import Lotto from "./Lotto";

interface LottoGeneratorProps {
    lottolist : number[];
    displaySectionName: string;
}

function LottoGenerator({lottolist,displaySectionName} : LottoGeneratorProps){

    return(

        <section className={displaySectionName}>
                <span>
                    {lottolist.map(($el,index)=>(
                        <Lotto lotto={$el} key={index}/>
                    ))}
            </span>

        </section>
    )
}

export default LottoGenerator;