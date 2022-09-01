import React, {Component} from 'react';
import {RESULT_TABLE_DATA, RESULT_TABLE_KEY_LIST} from "../utils/LottoRules";
import "../css/winning-result.css"
class WinningResults extends Component {
    constructor() {
        super();

        this.state = {
            matchCount: {},
            rateReturn: 0,


        }
    }



    render() {
        return (
            <div className="winning-result-open">

                <h2>제목</h2>
                <p>날짜</p>
                <p>상세내용</p>

                <button onClick={this.props.onCloseModal}>X</button>
            </div>

        )
    }
}
export default WinningResults;