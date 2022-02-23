const output = document.querySelector('.output');

const div1 = createEle(output, 'div', '', 'textarea');

addText('Total Bill : ', div1);
const totalBill = createEle(div1, 'input', '', 'box');
totalBill.setAttribute('type', 'number');
totalBill.setAttribute('min', '0');
totalBill.value = 15;

const div2 = createEle(output, 'div', '', 'textarea');
addText('Tip Percentage %  : ', div2);

const totalPerc = createEle(div2, 'input', '', 'box');

totalPerc.setAttribute('type', 'number');
totalPerc.setAttribute('max', '100');
totalPerc.value = 100;

const btn = createEle(output, 'button', 'Get total','btn');
const total = createEle(output, 'div','-', 'textbtn');

btn.addEventListener('click',(e)=>{
    let tb = totalBill.value;
    let tp = totalPerc.value;
    tp = (tp > 100)? 100 : tp;
    tb = (tb < 0)? 0 : tb;
    totalPerc.value = tp;
    totalBill.value = tb;
    console.log(tb, tp);
    const tip = (tb * (tp/100)).toFixed(2);
    total.innerHTML = `Tip should be ${tip}`;
})

function addText(message, parent){
    const temp = document.createTextNode(message);
    parent.appendChild(temp);
}

function createEle(parent, eleType, html, myClass){
    const ele = document.createElement(eleType);
    parent.appendChild(ele);
    ele.innerHTML = html;
    ele.classList.add(myClass);
    return ele;
}