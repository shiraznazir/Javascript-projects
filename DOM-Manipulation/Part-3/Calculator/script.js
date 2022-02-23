const output = document.querySelector('.output');
const keys = 
['*','/','+','-','9','8','7','6','5','4','3','2','1','0','.','=','C'];
const spec = ['*','/','+','-'];

let dec = false; 
const main = createEle('input', output, 'main');
main.setAttribute('type', 'text');

const container = createEle('div', output, 'container');

keys.forEach((key)=>{
   // console.log(key);
    btnMaker(key, container);
})

function btnMaker(val, parentEl){
    const btn = createEle('button', parentEl, 'btn');
    btn.textContent = val;
    btn.val = val;
    btn.addEventListener('click',(e)=>{
     //   console.log(val);
        addOutput(val)
    })
    return btn;
}

function togBorder(bc){
    main.style.borderColor = bc;
}

function addOutput(val){
    //console.log(val);
    let temp = main.value;
    let boo = true;
    let lastOne = temp.charAt(temp.length-1);
    //console.log(isNaN(lastOne));
    //console.log(isNaN(val));
    togBorder('black');

    if(isNaN(val) && lastOne.length === 0){
        boo = false;
        togBorder('red');
    }
    if(isNaN(lastOne) && isNaN(val)){
        boo = false;
        togBorder('red');
    }
    if(val === 'C'){
        main.value = '';
        dec = false;
        togBorder('black');
        boo = false;
    } else if(val === '='){
        evalOutput(lastOne);
        boo = false;
    } else if(val === '.'){
        if(dec){
            boo = false;
            togBorder('red');
        } else {
            dec = true;
        }
    }
    
    if(boo){
        main.value += val;
    }
}
function evalOutput(lastOne){
   
    if(!isNaN(lastOne)){
        let temp = eval(main.value);
        temp = !parseInt(temp)? 0 : temp;
        temp = temp.toString();
        dec = temp.includes('.');
        console.log(dec);
        main.value = temp;
    }

}

function createEle(eleType, elParent, myClass){

    const ele = document.createElement(eleType);
    ele.classList.add(myClass);
    elParent.append(ele);
    return ele;

}