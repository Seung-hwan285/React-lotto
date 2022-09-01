import React, {Component} from 'react';
import {RESULT_TABLE_DATA, RESULT_TABLE_KEY_LIST} from "../utils/LottoRules";
import "../css/winning-result.css"
class WinningResults extends Component {
    constructor() {
        super();

        this.state = {
            matchCount: {},
            rateOfReturn: 0,


        }
    }

    render() {
        return (
            <div className="winning-result-open">

                <div className="winning-result-inner">
                    <button onClick={this.props.onCloseModal}>X</button>

                </div>


                <h2 className="winning-result-title">🏆당첨 결과🏆</h2>
                <div className="result-table-wrapper">

                    <table className="result-table">
                        {/*제목*/}
                        <thead>
                        <tr className="table-row">
                            <th className="table-head">구분</th>
                            <th className="table-head">당첨금</th>
                            <th className="table-head">개수</th>
                        </tr>
                        </thead>
                        {/*내용*/}
                        <tbody>

                        {
                            RESULT_TABLE_KEY_LIST.map(($el)=>(
                            <TableRow key={$el} tableKey={$el} numOfMatch={this.state.matchCount[$el]} />
                        ))}

                        </tbody>
                    </table>
                </div>
                <p className="winning-result-rate-of-return">당신의 총 수익률은 {this.state.rateOfReturn}%입니다.</p>
            </div>

        )
    }
}


function TableRow(props){

    const key = props.tableKey;

    console.log(props.numOfMatch);
    return(
        <tr>
            <td className="table-data">{RESULT_TABLE_DATA[key].DESCRIPTION}</td>
            <td className="table-data">{RESULT_TABLE_DATA[key].PRIZE}</td>
            <td className="table-data">{props.numOfMatch ?? 0}</td>
        </tr>
    )
}

export default WinningResults;