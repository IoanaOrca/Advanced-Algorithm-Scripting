function checkCashRegister(price, cash, cid) {
  var change=Math.round((cash-price)*100);
  var changeReturned=[];
  var value=0;
  var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  //convert values in cid to integers
  cid.forEach(function(el){el[1]=Math.round(el[1] * 100);});
  //total money in the register:
  var cidHave = Math.floor(cid.map(function (v){return v[1];}).reduce(function(a,b){ return(a+b);}));

  //Case the money in the register is less or equal with the amount of change
  if (change===cidHave) return "Closed";
      else if (change>cidHave) return "Insufficient Funds";

  //in case the money in the register is more than the amount of change
  for(i=currency.length-1;i>=0;i--){
    //check what is the biggest bill we need to give change
    value=0;
    while (cid[i][1] > 0 && change >= currency[i]){
      //update everything as long as condition is true
        change -= currency[i];
        cid[i][1] -= currency[i];
        //value keeps track of the amount of each currency unit as change
        value += currency[i];
      }
    if (value)
        changeReturned.push([cid[i][0], value]);

  }
  //check to see if we have enough coins
  if (change!=0) return "Insufficient Funds";
  //divide each array by 100 to display a proper money format
  changeReturned.forEach(function(el){el[1] =+(el[1] / 100).toFixed(2);});
  return changeReturned;
}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
