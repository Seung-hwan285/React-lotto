import './App.css';

import {Component, useEffect, useState} from "react";

import PurchaseAmount from "./component/PurchaseAmount";
import createLotto from "./service/createLotto";
import getLottoList from "./service/getLottoList";



function App(){
  const [lottoList,setLottoList] = useState([]);
  const [isShowingResult,setIsShowingResult]=useState(false);
  const [drawNumber,setDrawNumber]=useState({});

  const isPurchesed = Boolean(lottoList.length);



  console.log(lottoList);


  return(

      <div className="app">

        <h1 className="header">🎱  행운의 로또</h1>
      <main>

            <PurchaseAmount setLottoList={setLottoList}/>


      </main>
      </div>
  )
}

//
//
// class App extends  Component {
//   constructor() {
//     super();
//
//
//     this.state = {
//       lottoList: [],
//       isShowingResult:false,
//       drawNumber :{},
//     };
//
//
//     this.onPurchaseLotto=this.onPurchaseLotto.bind(this);
//     this.setDrawNumber = this.setDrawNumber.bind(this);
//     this.onShowWinningResult=this.onShowWinningResult.bind(this);
//     this.onCloseModal=this.onCloseModal.bind(this);
//     this.onReset=this.onReset.bind(this);
//   }
//
//   setDrawNumber({drawNumber}){
//
//     this.setState({drawNumber :drawNumber});
//   }
//
//   onPurchaseLotto({numOfLotto}){
//     this.setState({lottoList : [...Array(numOfLotto)].map(()=>this.createLotto())});
//   }
//
//   createLotto(arr=[]){
//     const number = generateRandomLotto({ min: 1, max: 45 });
//
//
//     if(!arr.includes(number)){
//       arr.push(number);
//     }
//
//     if (arr.length === 6) {
//       return arr.sort((a, b) => a - b);
//     }
//     return this.createLotto(arr);
//   }
//
//   onShowWinningResult(){
//     this.setState({
//       isShowingResult : true,
//     })
//   }
//
//   onCloseModal(){
//     this.setState({
//       isShowingResult :false,
//     })
//   }
//
//   onReset(){
//     this.setState({lottoList : [],isShowingResult :false});
//   }
//
//   render()
//   {
//     const {lottoList,isShowingResult,drawNumber}= this.state;
//     // console.log(lottoList)
//
//     const isPurchase = Boolean(lottoList.length);
//     // console.log(isShowingResult);
//
//
//     return (
//         <div className="app">
//           <h1 className="header">🎱 행운의 로또</h1>
//           <main>
//             <PurchaseAmount lottoList={lottoList} onPurchaseLotto={this.onPurchaseLotto}/>
//             {isPurchase ? <PurchaseLotto lottoList={lottoList}/> : null}
//             {isPurchase ? <WinnerNumber   setDrawNumber ={this.setDrawNumber}
//                                           onShowWinningResult={this.onShowWinningResult}/>
//                                             :null}
//
//             {isShowingResult ? <WinningResults lottoList={lottoList}
//                                                onCloseModal={this.onCloseModal}
//                                                onReset={this.onReset}
//                                                 drawNumber={drawNumber}
//                                                 /> :null}
//           </main>
//         </div>
//     );
//   }
//
// }

export default App;
