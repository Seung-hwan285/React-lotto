function PayLotto(money){



  const change =money % 1000;


  const numOfLotto = (money - change) / 1000;



    return { change, numOfLotto };

}
export default PayLotto;