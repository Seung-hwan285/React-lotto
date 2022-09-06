import Lotto from "../component/Lotto";
import React from "react";


function LottoGenerator({lottolist}){


    console.log(lottolist);
    return(
        <div>
                <span>
                    {lottolist.map(($el,index)=>(
                        <Lotto lotto={$el} key={index}/>
                    ))}
            </span>
        </div>
    )
}

export default LottoGenerator;