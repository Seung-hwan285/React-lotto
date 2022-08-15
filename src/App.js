import './App.css';
import {render} from "react-dom";
import {Component} from "react";
import {generateRandomLotto} from "./component/getRandomLottoNumber";
import PurchaseAmount from "./component/PurchaseAmount";


class App extends  Component {
  constructor() {
    super();


    this.state = {
      lottoList: [],
    };


    this.onPurchaseLotto=this.onPurchaseLotto.bind(this);
    this.createLotto=this.createLotto.bind(this);
  }


  onPurchaseLotto({numOfLotto}){


    console.log(numOfLotto);
    this.setState({

        lottoBundle : [...Array(numOfLotto).map(()=>this.createLotto())]
    });


  }

  createLotto(){

    let arr=[];
    const getRandomNumber = generateRandomLotto(1,45);


    if(arr.length ===6){
      return arr.sort((a,b)=>a-b);
    }


    else if(!arr.includes(getRandomNumber)){
      arr.push(getRandomNumber);
    }

    console.log(arr);
  }

  render()
  {

    return (
        <div className="app">


          <h1 className="header">🎱 행운의 로또</h1>
          <main>


            <PurchaseAmount  onPurchaseLotto={this.onPurchaseLotto}/>
            {/*<PurchaseLotto/>*/}

          </main>
        </div>
    );
  }

}

export default App;
