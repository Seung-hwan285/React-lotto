import './App.css';
import {render} from "react-dom";
import {Component} from "react";
import {generateRandomLotto} from "./component/getRandomLottoNumber";
import PurchaseAmount from "./component/PurchaseAmount";
import PurchaseLotto from "./component/PurchaseLotto";


class App extends  Component {
  constructor() {
    super();


    this.state = {
      lottoList: [],
    };


    this.onPurchaseLotto=this.onPurchaseLotto.bind(this);

  }


  onPurchaseLotto({numOfLotto}){

    this.setState({lottoList : [...Array(numOfLotto)].map(()=>this.createLotto())});
  }

  createLotto(arr=[]){
    const number = generateRandomLotto({ min: 1, max: 45 });
    console.log(number)

    if(!arr.includes(number)){
      arr.push(number);
    }

    if (arr.length === 6) {
      return arr.sort((a, b) => a - b);
    }

    return this.createLotto(arr);
  }

  render()
  {
    const {lottoList}= this.state;
    console.log(lottoList)

    const isPurchase = Boolean(lottoList.length);

    return (
        <div className="app">
          <h1 className="header">🎱 행운의 로또</h1>
          <main>
            <PurchaseAmount lottoList={lottoList} onPurchaseLotto={this.onPurchaseLotto}/>
            {isPurchase ? <PurchaseLotto lottoList={this.state.lottoList}/> : null}
          </main>
        </div>
    );
  }

}

export default App;
