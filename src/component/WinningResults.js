import React, {Component} from 'react';
import {
    BONUS_CHECK_REQUIRED_COUNT,
    BONUS_COUNT,
    BUNUS_NUMBER,
    RESULT_TABLE_DATA,
    RESULT_TABLE_KEY_LIST
} from "../utils/LottoRules";
import "../css/winning-result.css"
class WinningResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matchCount: {},
            rateOfReturn: 0,
        }
        this.getMatchCount=this.getMatchCount.bind(this);
    }


    componentDidMount() {

        const matchCount=this.getMatchCount();
        this.setState({matchCount});
    }

    // 로또 생성 번호랑 , 고정된 당첨번호 비교해서 객체로 출력
    // [x] 객체 비구조화로  : drawNumber 당첨번호 , 보너번호 가져오기
    // [x] 로또 발급 번호 가져오기 하나하나 비교하기위해서 forEach 사용
    // [x] reduce 사용해서 현재 로또 값이 고정된 당첨번호 안에 포함되어 있으면 카운팅
    // [x] 카운팅 값이 5개이고 보너스 넘버도 있으면 numOfMatch 보너스 값 더함

    getMatchCount(){

        const matchCount = {};
        const { winningNumbers, bonusNumber } = this.props.drawNumber;

        this.props.lottoList.forEach((lotto) => {
            let numOfMatch = lotto.reduce((acc, cur) => acc + Number(winningNumbers.includes(cur)), 0);

            if (numOfMatch === BONUS_CHECK_REQUIRED_COUNT && lotto.includes(bonusNumber)) {
                numOfMatch += BONUS_COUNT;
            }
            matchCount[numOfMatch] = matchCount[numOfMatch] === undefined ? 1 : matchCount[numOfMatch] + 1;
        });

        console.log(matchCount);
        return matchCount;
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
                        <thead className="table-row">
                            <th>
                                구분
                            </th>

                            <th>
                                당첨금
                            </th>

                            <th>
                                개수
                            </th>
                        </thead>

                        <tbody>


                        {RESULT_TABLE_KEY_LIST.map(($el)=>(

                            <TableRow tablekey={$el} numOfMatch={this.state.matchCount[$el]}/>
                        ))}
                        </tbody>
                    </table>
                </div>



                <button onClick={this.props.onReset}>다시 시작하기</button>
            </div>

        )
    }
}


function TableRow(props){

    const key = props.tablekey;

    console.log(key);


    return(

        <tr>
            <td className="table-data">{RESULT_TABLE_DATA[key].DESCRIPTION}</td>
            <td className="table-data">{RESULT_TABLE_DATA[key].PRIZE}</td>
            <td className="table-data">{props.numOfMatch ?? 0}</td>
        </tr>
    )

}

export default WinningResults;