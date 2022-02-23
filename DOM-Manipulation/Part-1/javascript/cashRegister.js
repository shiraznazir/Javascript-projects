
function checkCashRegister(price, cash, cid){
    let changeSum = cash * 100 - price * 100;
    let changeSumCheck = changeSum;
    let change = [];
    let status = '';
    let cidSum = 0;
    let currencyUnit = cid.forEach(element => element * 100);
    let filteredCid = cid.filter(element => element[1] !== 0).reverse();

    filteredCid.forEach(element =>{
        let curr = element[0];
        let currSum = element[1] * 100;
        cidSum += currSum;
        let amount = 0;
        while(changeSum >= currencyUnit[curr] && currSum > 0){
            amount += currencyUnit[curr];
            changeSum -= currencyUnit[curr];
            currSum -= currencyUnit[curr];
        }
        if(amount != 0){
            change.push([curr, amount/100]);
        }
    });
    if(changeSum > 0){
        status = 'INSUFFICIENT_FUNDS',
        change = [];
    } else if(changeSum == 0 && changeSumCheck == cidSum){
        status = 'CLOSED',
        change = cid
    } else {
        status = 'OPEN'
    }
    return {
        'status' : status,
        'change' : change
    }
}

let result = checkCashRegister(19.5, 20, [
	['PENNY', 1.01],
	['NICKEL', 2.05],
	['DIME', 3.1],
	['QUARTER', 4.25],
	['ONE', 90],
	['FIVE', 55],
	['TEN', 20],
	['TWENTY', 60],
	['ONE HUNDRED', 100]
])
console.log(result);
