// let myObj = {
//     name : "shiraz"
// }

// function updateValue(objRef){
//     objRef.value = 20;
// }

// updateValue(myObj);
// console.log(myObj.value);

// let original = 12;

// function updateOriginal(originalVal){
//     originalVal += 10;
//     console.log("originalVal: ",originalVal);
// }

// updateOriginal(original);
// console.log("original :- ",original);


// function update(b){
//     console.log(a);
// }

// let a = 10;
// update(a);

// let myAge = 12;

// function printMyAge(){
//     let myAge = 25;
//     console.log(myAge);
// }

// printMyAge(myAge);
// console.log(myAge);


// const heading = document.querySelector('h1');

// heading.innerText = 'Hello Meher';

// const allListItems = document.querySelectorAll('ul li');

// for(let i = 0; i < allListItems.length; i++){
//     const item = allListItems[i];
//     item.innerText = 'doooooooooo mmmmmmm';
// }

// console.log(allListItems);

// const incrementBtn = document.querySelector('#increment');
// const decrementBtn = document.querySelector('#decrement');
// const counterEle = document.getElementById('counter');
// const ulElement = document.getElementById('list-items');
// let counter = 0;

// function incrementCounter(){
//     counter++;
//     counterEle.innerText = counter;

//     // create an element
//     const li = document.createElement('li');
//     li.setAttribute('data-counter', counter);
//     li.innerHTML = '<b>Sentence : </b>' + counter

//     if(counter%2===0){
//       //  li.setAttribute('class', 'yellow');
//       li.style.background = 'red';
//     } else {
//        // li.setAttribute('class', 'red');
//        li.style.background = 'yellow';
//     }
//     // append that element
    
//     ulElement.appendChild(li);
// }

// function decrementCounter(){
//     const li = ulElement.querySelector('[data-counter="'+counter+'"]');
//     li.remove();
//     counter--;
//     counterEle.innerText = counter;
    
// }

// incrementBtn.addEventListener('click', incrementCounter);
// decrementBtn.addEventListener('click', decrementCounter);

// function telephoneCheck(str) {
	
//     const format0 = /^\d{10}$/
//     const format1 = /^\d{3}\-\d{3}\-\d{4}$/
//     const format2 = /^\(\d{3}\)\d{3}\-\d{4}$/
//     const format3 = /^\(\d{3}\) \d{3}\-\d{4}$/
//     const format4 = /^\d{3} \d{3} \d{4}$/
//     const format5 = /^1 \d{3} \d{3} \d{4}$/
//     const format6 = /^1 \(\d{3}\) \d{3}\-\d{4}$/
//     const format7 = /^1\(\d{3}\)\d{3}\-\d{4}$/
//     const format8 = /^1 \d{3}\-\d{3}\-\d{4}$/
    
// 	return format0.test(str) || format1.test(str) || format2.test(str) || format3.test(str) || format4.test(str) || format5.test(str) || format6.test(str) || format7.test(str) || format8.test(str)
    
// }
    
// telephoneCheck('555-555-5555')

// function checkCashRegister(price, cash, cid) {
// 	var change = cash - price;
//     let count = 0;
//     for(let i=0; i< cid.length; i++){
//         if(change === cid[i][2]){
//             return {status: "CLOSED" , change : [cid[i][1], cid[i][2]]
//         }
//         count++;
//     }
//     if( count < change){
//         return {status: "INSUFFICIENT_FUNDS", change: []}
//     } else {
//          return {status: "OPEN", cid}
//     }
// }

// checkCashRegister(19.5, 20, [
// 	['PENNY', 1.01],
// 	['NICKEL', 2.05],
// 	['DIME', 3.1],
// 	['QUARTER', 4.25],
// 	['ONE', 90],
// 	['FIVE', 55],
// 	['TEN', 20],
// 	['TWENTY', 60],
// 	['ONE HUNDRED', 100]
// ])



// function palindrome(str) {
// 	let str2 = str.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ").replace(/\s+/g, ""); 
//     let str3 = str2.toLowerCase();
//     let n = str3.length;
//     let m = str3.charAt()
//     console.log(str3);
// }

// palindrome("not a palindrome" );

// var str = "Visit Microsoft!";
// var res = str.replace(/\s+/g, "");
// console.log(res);

let rem = 9 / 10;
console.log(rem);