
import React from "react";
import Lotto from "./Lotto";


function LottoGenerator({lottolist,displaySectionName}){


    console.log(lottolist);
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